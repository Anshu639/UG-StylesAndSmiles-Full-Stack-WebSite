import React, { useState, useEffect, useContext } from "react";
import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UseCart } from "./CartContext";
export default function NavBar(props) {
  const { _id, name, handleSignOut } = useContext(UserContext);
  const { totalItem } = UseCart()
  // const { onSignOut } = props
  const [click, setClick] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [button, setButton] = useState(true)

  const navigate = useNavigate();
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton();
  }, [])
  window.addEventListener('resize', showButton)
  const handleClick = () => {
    setClick(!click);
  };

  const subMenuItems = [
    {
      title: "Hair Care",
      link: "/services/haircare"
    },
    {
      title: "Skin Care",
      link: "/services/skincare"
    },
    {
      title: "Body Care",
      link: "/services/bodycare"
    },
    {
      title: "Bridal",
      link: "/services/bridal"
    }
  ];

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Smile <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSubMenuOpen(!subMenuOpen)}>
              <Link to="" className="nav-links">
                Services &nbsp; <i className="fas fa-caret-down" />
              </Link>
              {subMenuOpen && (
                <ul className="sub-menu" >
                  {subMenuItems.map((item, index) => (
                    <li key={index} className="nav-sub-item">
                      <Link to={item.link} className="nav-links" onClick={closeMobileMenu}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

            </li>
            <li className="nav-item">
              <Link to="/price" className="nav-links" onClick={closeMobileMenu}>
                Prices
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                <AiOutlineShoppingCart className="img" />
                <p className="p">{totalItem}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>
          </ul>
          {_id ? <div className="user-info">Hi, {name}</div> : <></>}
          {button && _id ? <button className="button1" onClick={handleSignOut}>
            Log Out
          </button> : <button className="button1" onClick={() => navigate("/login")}>
            Login
          </button>
          }
        </div>
      </nav>
    </>
  );
}
