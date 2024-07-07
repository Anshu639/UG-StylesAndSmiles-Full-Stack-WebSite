import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Services.module.css"
import NavBar from '../Components/navBar'
import Footer from '../Components/Footer'
import manicure from "../Images/manicure1.jpg"
import paddicure from "../Images/paddicure.jpg"
import waxing from "../Images/Waxing1.jpg"
import spa from "../Images/beauty-spa.jpg"
const BodyCare = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.mainHeading}>
                <h1 className={classes.mainHeading}>Body Care Services</h1>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={manicure} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Manicure</h2>
                    <p className={classes.content}>The Spa Manicure is an all herbal manicure that helps you de-stress by releasing the tension from your nerves using organic products. <br />

                        <br /> The Radiant Manicure is an excellent way to whiten dull or tanned skin. Get rid of unevenly tanned skin with this special manicure. <br />

                        <br /> The Intense Moisturizing Manicure is recommended for dry hands. Soak your hands in a special moisturising mixture for soft, beautiful hands. For hands that feel Naturally soft!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Pedicure</h2>
                    <p className={classes.content}>A pedicure is the best stress relief for the body. It releases the tension from your feet, relieving and detoxing the entire body. <br />

                        <br /> At Naturals, we specialise in 3 types of pedicure – Radiant Pedicure, Intense Moisturizing Pedicure and Spa Pedicure. <br />

                        <br /> The Spa Pedicure is an all-natural pedicure that uses organic products, which help soothe your nerves that leaves you feeling completely relaxed. <br />

                        <br /> Get that pedicure for the feet on the go!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={paddicure} alt="" />
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={waxing} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Waxing</h2>
                    <p className={classes.content}>
                        Our professionals take utmost care to ensure our customers have a comfortable and relatively less painful grooming experience. At Naturals, your body is treated with the best quality products. <br />

                        <br /> Eyebrow threading is performed with consideration for your facial features, and body waxing leaves you with a silky smooth finish. <br />

                        <br /> Groom yourself with the comfort of our experts!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Spa</h2>
                    <p className={classes.content}>Styles n' Smiles is a wellness center that offers a variety of spa services designed to rejuvenate and revitalize the body and mind. Their spa services include massages, facials, body wraps, and aromatherapy treatments. <br />

                        <br /> The skilled therapists at Styles n' Smiles use high-quality products and techniques to provide a relaxing and therapeutic experience for their clients. <br />

                        <br /> Whether you're looking to unwind after a long day or pamper yourself for a special occasion, their spa services are sure to leave you feeling refreshed and renewed.

                    </p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={spa} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BodyCare
