import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import SkinCare from "./Pages/SkinCare";
import BodyCare from "./Pages/BodyCare";
import Price from "./Pages/Prices";
import Bridal from "./Pages/Bridal";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from './Pages/Cart';
import CheckOut from './Pages/Checkout';
import { CartContextProvider } from './Components/CartContext';

export const UserContext = createContext();
function App() {
  const [user, setLoginUser] = useState({})

  const handleSignOut = () => {
    setLoginUser({});
  };
  return (
    <div className="App">
      <UserContext.Provider value={{ ...user, handleSignOut }}>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route exect path="/" element={user && user._id ? <Home user={user} onSignOut={handleSignOut} /> : <Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/services/haircare" element={<Services />} />
              <Route path="/services/skincare" element={<SkinCare />} />
              <Route path="/services/bodycare" element={<BodyCare />} />
              <Route path="/services/bodycare" element={<Services />} />
              <Route path="/services/bridal" element={<Bridal />} />
              <Route path="/price" element={<Price />} />
              <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
