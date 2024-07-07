import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Services.module.css"
import NavBar from '../Components/navBar'
import Footer from '../Components/Footer'
import facewash from "../Images/face-wash.jpg"
import facemask from "../Images/face-mask.jpg"
import facial from "../Images/facial.jpg"
import dten from "../Images/dten.jpg"
const SkinCare = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.mainHeading}>
                <h1 className={classes.mainHeading}>Skin Care Services</h1>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={facewash} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Face Clean Up</h2>
                    <p className={classes.content}>Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health. <br />

                        <br /> At Styles n' Smiles, we offer face clean up options for all skin types. A face scrub to remove any impurities hidden in your pores followed by a face massage nourishes your face from within, giving your skin a Naturals glow! <br />

                        <br /> Keep your skin healthy, hydrated and glowing!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Facial</h2>
                    <p className={classes.content}>A facial is not just about pampering yourself, it also does wonders for your skin! A facial done by a professional, deep cleans and hydrates your skin as well as relieves acne. A good facial also improves blood circulation, giving your skin a healthy glow. <br />

                        <br /> At Styles n' Smiles, our facial options cater to all skin types. We use products containing vital minerals and nutrients that reduce wrinkles and remove dead skin, giving your skin a youthful appearance. Black mud, fruit acids, vitamins, enzymes, gold and anti-oxidants are just a few of the special ingredients found in our facials.</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={facial} alt="" />
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={dten} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>De-Tan</h2>
                    <p className={classes.content}>De-Tanning at the Naturals beauty parlour is effective yet gentle on your skin. Facial bleaching is the best way to de-tan quickly while adding brightness to your skin. <br />

                        <br /> Styles n' Smiles beauty parlour’s skincare professionals bleach your face using techniques that do not damage, harm or change the texture of your skin. A face bleaching done at the Naturals beauty parlour leaves you with skin that is fairer, fresher and flawless! <br />

                        <br /> De-tan your face and look as fresh as ever at Naturals!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Face Masks</h2>
                    <p className={classes.content}>A facial mask is a beauty and cleansing treatment that is designed to tackle specific problems for each skin type. A facial mask deep-cleans nourishes and brightens your skin as well as heals acne scars and hyperpigmentation. <br />

                        <br />  At Styles n' Smiles, our face masks are made with ingredients to suit your skin type. Choose from an array of face mask options. <br />

                        <br /> Facial mask treatments at Styles n' Smiles will revitalize your skin, leaving you refreshed!

                    </p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={facemask} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SkinCare
