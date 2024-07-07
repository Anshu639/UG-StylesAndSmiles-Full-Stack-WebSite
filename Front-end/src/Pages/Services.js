import React from 'react'
import classes from "./Services.module.css"
import NavBar from '../Components/navBar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import haircut from "../Images/hair-cutting.jpg"
import haircolor from "../Images/Haircolor.jpg"
import hairwash from "../Images/hairwash.jpg"
import hairstraightening from "../Images/hair-strighting.jpg"
import Keratin from "../Images/Keratin.jpg"
const Services = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.mainHeading}>
                <h1 className={classes.mainHeading}>Hair Care Services</h1>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={haircut} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Hair Cut & Styling</h2>
                    <p className={classes.content}>Accentuate your best features with the perfect mane! Our hairstylists are skilled in adding movement to your hair and creating a look that defines your face and adds volume.<br />

                        <br />At Styles n' Smiles, you can trust our hairstylists to give you the latest hairstyle, while keeping in mind your preferences. New hairstyles come with a relaxing hair wash and conditioning, giving you a natural shine.<br />

                        <br /> Meeting the new you is only a haircut away!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Hair Colouring and Highlighting</h2>
                    <p className={classes.content}>Reinvent your whole look with a dash of colour! All Naturals hair colouring services include root touchup, global colouring, streaking, block colouring and creative colouring. All our hair colouring products are ammonia-free. Our hair experts can transform your entire look with just a few streaks of our ammonia-free hair colour!<br />

                        <br />If you want your hair to have depth and dimension, highlights are the way to go. Depending on your complexion, the shape of your face, and your overall personality, we will help you choose the right colour.Reinvent yourself by experimenting with colours!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={haircolor} alt="" />
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={hairwash} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Hair Wash</h2>
                    <p className={classes.content}>Pampering yourself and your hair with a good hair spa is a must! At Styles n' Smiles, we pamper every strand of your hair thanks to our hair care professionals’ gifted, gentle hands. Our hair spa services are a healthy indulgence that exfoliates your hair, stimulates your scalp and promotes hair growth. A hair spa treatment is the best solution for dry, frizzy hair. It also relaxes your body and relieves stress.<br />

                        <br />Get that Styles n' Smiles pampering head-to-toe!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <h2 className={classes.Heading}>Hair Strightening</h2>
                    <p className={classes.content}>Ever wish you had straight, silky hair? Naturals Hair Straightening Services give you super straight, silky hair leaving the curves only to your smiles!<br></br>

                        <br></br>Our hairstylists ensure you get a damage-free hair straightening treatment with our safe and internationally tested branlike as Wella, Schwarzkopf and L’Oreal. Opt for our hair smoothening services and keep your hair frizz and worry-free!<br></br>

                        <br></br>Silky straight hair with Styles n' Smiles!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
                <div className={classes.right}>
                    <img src={hairstraightening} alt="" />
                </div>
            </div>
            <div className={classes.services}>
                <div className={classes.left}>
                    <img src={Keratin} alt="" />
                </div>
                <div className={classes.right}>
                    <h2 className={classes.Heading}>Keratin service</h2>
                    <p className={classes.content}><br></br>Naturals Keratin Services gives you the best hair restoration therapy by making your hair more robust and less prone to breakage resulting in voluminous, thicker-looking hair!<br></br>

                        <br></br>Give your dull, brittle hair a new life in just a snap!</p>
                    <button><Link to="/price" className={classes.price}>View Price</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services
