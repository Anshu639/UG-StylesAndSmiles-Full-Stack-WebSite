import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Link to="/" className="navbar-logo">
                    Smile <i className="fab fa-typo3" />
                </Link>
            </div>
            <div className="footer__menu">
                <h3>Navigate</h3>
                <div className="my_menu">
                    <ul>
                        <li className='menu-item'>
                            <Link to="/" className="footer-nav-links" >
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/aboutUs" className="footer-nav-links" >
                                About Us
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="footer-nav-links" >
                                Services
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/price" className="footer-nav-links" >
                                Price
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contactUs" className="footer-nav-links" >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__services">
                <h3>Our Services</h3>
                <div className="ourservicescat">
                    <ul className='mylist'>
                        <li className='menu-item'>
                            <Link to="/" className="footer-nav-links" >
                                Hair Care
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/aboutUs" className="footer-nav-links" >
                                Skin Care
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="footer-nav-links" >
                                Body Care
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contactUs" className="footer-nav-links" >
                                Bridal Services
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="footer__contact">
                <h3>Contact Us</h3>
                <div className="information">
                    <p><IoLocationSharp /> Styles n' Smiles, Clock Tower, Dehradun</p>
                </div>
                <div className="information">
                    <p><AiOutlineMail /> contact@styles.com</p>
                </div>
                <div className="information">
                    <p> <BsTelephone /> +91 6396268840</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
