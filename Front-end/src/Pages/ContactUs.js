import React, { useEffect, useState } from 'react'
import styles from "./ContactUs.module.css"
import axios from 'axios';
import shape1 from "../Images/shape.png"
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import NavBar from '../Components/navBar';
import Footer from '../Components/Footer';
const ContactUs = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const submit = () => {
        axios.post("http://localhost:9002/contactus", values)
            .then(res => {
                alert(res.data.message)
            })
    }



    useEffect(() => {
        const inputs = document.querySelectorAll(`.${styles.input}`);

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add(styles.focus);
        }
        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove(styles.focus);
            }
        }
        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);

            return () => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            };
        });
    }, []);


    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <span className={styles['big-circle']}></span>
                <img src={shape1} alt="" className={styles.square} />
                <div className={styles.form}>
                    <div className={styles['contact-info']}>
                        <h3 className={styles.title}>Let's get in touch</h3>
                        <p className={styles.text}>
                            We would love to hear from you. Contact us with any questions,
                            comments or suggestions!
                        </p>
                        <div className={styles.info}>
                            <div className={styles.information}>
                                <p><GrLocation /> Styles n' Smiles, Clock Tower, Dehradun</p>
                            </div>
                            <div className={styles.information}>
                                <p><AiOutlineMail /> contact@styles.com</p>
                            </div>
                            <div className={styles.information}>
                                <p> <BsTelephone /> +91 6396268840 </p>
                            </div>
                        </div>

                        <div className={styles['social-media']}>
                            <p>Connect with us :</p>
                            <div className={styles['social-icons']}>
                                <a href="https://www.facebook.com/profile.php?id=100008365355034">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.youtube.com/@poojasemwal13uk">
                                    <FaYoutube />
                                </a>
                                <a href="https://instagram.com/pooja_beauty_care_rpg?igshid=YmMyMTA2M2Y=">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles['contact-form']}>
                        <span className={styles.circle + ' ' + styles.one}></span>
                        <span className={styles.circle + ' ' + styles.two}></span>

                        <form action="" onSubmit={handleSubmit} autoComplete="false">
                            <h3 className={styles.title}>Contact us</h3>
                            <div className={styles['input-container']}>
                                <input type="text" name="name" className={styles.input} onChange={onChange} />
                                <label htmlFor="">Name</label>
                                <span>Name</span>
                            </div>
                            <div className={styles['input-container']}>
                                <input type="email" name="email" className={styles.input} onChange={onChange} />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className={styles['input-container']}>
                                <input type="tel" name="phone" className={styles.input} onChange={onChange} />
                                <label htmlFor="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className={styles['input-container'] + ' ' + styles.textarea}>
                                <textarea name="message" className={styles.input} onChange={onChange} />
                                <label htmlFor="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className={styles.btn} onClick={submit} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ContactUs
