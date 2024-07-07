import React from 'react'
import classes from "./AboutUs.module.css"
import NavBar from "../Components/navBar"
import aboutUsImg from "../Images/woman-hairdresser-salon.jpg"
import Footer from "../Components/Footer"
import pic1 from "../Images/Anu.jpg"
import pic2 from "../Images/Deepika.jpg"
import pic3 from "../Images/Pooja.jpg"
export default function AboutUs() {

    return (
        <div>
            <NavBar />
            <div className={classes.aboutUsBanner}>
                <h1>About Us</h1>
            </div>
            <div className={classes.aboutUsInfo}>
                <div className={classes.aboutUsImage}>
                    <img src={aboutUsImg} alt="" />
                </div>
                <div className={classes.aboutUsContent}>
                    <h3 className={classes.aboutUsHeading}>Who We are</h3>

                    <p className={classes.whoWeAre}>Welcome to Style n' Smiles, your one-stop-shop for all your beauty needs. We are a premier salon that offers a wide range of hair, skin, and nail services, designed to make you look and feel your absolute best. Our highly skilled and experienced team of beauty professionals are passionate about providing exceptional services that exceed your expectations.

                        At Style n' Smiles, we believe that beauty is more than skin deep. That's why we only use high-quality, all-natural products that are good for your skin, hair, and nails. We also offer a range of products that you can purchase to maintain your beauty regimen at home.

                        We are dedicated to providing our clients with the best possible experience. Whether you're here for a haircut, color treatment, facial, or any other service, our goal is to make you feel relaxed and comfortable. Our welcoming and friendly atmosphere is the perfect place to unwind and indulge in some much-needed self-care.

                        Our team is committed to staying up-to-date on the latest beauty trends and techniques, so you can trust that you're always getting the best service possible. We also offer personalized consultations to help you find the perfect look that suits your unique style and personality.</p>
                </div>
            </div>
            <div className={classes.knowOurTeam}>
                <h3 className={classes.knowOurTeamHeading}> Know Our Team</h3>
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem}>
                        <img src={pic3} className={classes.teamImages} alt="Person 1" />
                        <div className={classes.overlay}>
                            <p className={classes.title}>Pooja Semwal</p>
                            <p className={classes.discription}>Hair Specilist</p>
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <img src={pic1} className={classes.teamImages} alt="Person 2" />
                        <div className={classes.overlay}>
                            <p className={classes.title}>Anu Bisht</p>
                            <p className={classes.discription}>Bridal Artist</p>
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <img src={pic2} className={classes.teamImages} alt="Person 3" />
                        <div className={classes.overlay}>
                            <p className={classes.title}>Deepika rana</p>
                            <p className={classes.discription}>Bridal Artist</p>
                        </div>
                    </div>
                    {/* <div className={classes.gridItem}>
                        <div className={classes.overlay}>
                            <img src="https://example.com/image4.jpg" alt="Person 4" />
                            <div className={classes.text}>Person 4</div>
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    )
}
