import React from 'react'
import classes from "./Services.module.css"
import { Link } from 'react-router-dom'
import NavBar from '../Components/navBar'
import Footer from '../Components/Footer'
import makeup from "../Images/bridal-makeup.jpg"
import hairstyle from "../Images/bridal-hairstyle.jpg"
import mehendi from "../Images/mehendi.jpg"
import prewedding from "../Images/pre-wedding.jpg"
const Bridal = () => {
    return (
        <div>
            <div>
                <NavBar />
                <div className={classes.mainHeading}>
                    <h1 className={classes.mainHeading}>Bridal Services</h1>
                </div>
                <div className={classes.services}>
                    <div className={classes.left}>
                        <img src={makeup} alt="" />
                    </div>
                    <div className={classes.right}>
                        <h2 className={classes.Heading}>Customised Bridal Makeup</h2>
                        <p className={classes.content}>Styles n' Smiles Salon offers a customized bridal makeup service to help brides look their best on their special day. Our experienced makeup artists work closely with each bride to create a personalized look that complements their unique features, style, and wedding theme. From soft and natural to bold and glamorous, we offer a range of bridal makeup styles to suit every preference. We use high-quality, professional-grade products to ensure long-lasting wear and a flawless finish. Trust us to help you achieve the perfect bridal look that will leave you feeling confident, beautiful, and ready to say "I do."</p>
                        <button><Link to="/price" className={classes.price}>View Price</Link></button>
                    </div>
                </div>
                <div className={classes.services}>
                    <div className={classes.left}>
                        <h2 className={classes.Heading}>Hairstyles</h2>
                        <p className={classes.content}>We offers a variety of elegant and stunning Bridal Hairstyles that will make any bride look and feel beautiful on her special day. Our experienced hairstylists work closely with each bride to create a customized look that complements her dress, makeup, and personal style. From classic updos to romantic curls, we offer a range of options to suit every taste and preference. Our salon uses high-quality products and techniques to ensure your hair looks perfect throughout your wedding day. Trust us to make your dream bridal hairstyle a reality!</p>
                        <button><Link to="/price" className={classes.price}>View Price</Link></button>
                    </div>
                    <div className={classes.right}>
                        <img src={hairstyle} alt="" />
                    </div>
                </div>
                <div className={classes.services}>
                    <div className={classes.left}>
                        <img src={mehendi} alt="" />
                    </div>
                    <div className={classes.right}>
                        <h2 className={classes.Heading}>Mehendi</h2>
                        <p className={classes.content}>Bridal mehndi is a traditional form of body art that is applied to the hands and feet of a bride on her wedding day. We specialize in creating intricate and beautiful mehndi designs that enhance the bride's beauty and add an elegant touch to her overall look. Our skilled artists use high-quality henna paste to create customized designs based on the bride's preferences and the latest trends in bridal mehndi. Whether you prefer traditional Indian motifs or modern and contemporary designs, we can create the perfect mehndi art to complement your wedding attire and make you feel like a true queen on your special day.</p>
                        <button><Link to="/price" className={classes.price}>View Price</Link></button>
                    </div>
                </div>
                <div className={classes.services}>
                    <div className={classes.left}>
                        <h2 className={classes.Heading}>Pre-Wedding Packages</h2>
                        <p className={classes.content}>We offers Pre-Wedding Makeup Packages to ensure that brides-to-be look their absolute best on their big day. Our packages include professional makeup services that cater to the bride's individual style and preferences. Our experienced makeup artists use high-quality products and techniques to enhance the bride's natural beauty and create a flawless look that will last throughout the wedding day. With a variety of packages available, brides can choose the perfect one for their needs and budget. Let us help you look and feel beautiful on your special day.
                        </p>
                        <button><Link to="/price" className={classes.price}>View Price</Link></button>
                    </div>
                    <div className={classes.right}>
                        <img src={prewedding} alt="" />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Bridal
