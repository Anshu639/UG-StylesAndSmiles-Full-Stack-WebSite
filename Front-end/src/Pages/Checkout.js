import React, { useState } from 'react'
import classes from "./CheckOut.module.css"
import { useNavigate } from 'react-router-dom';
import { UseCart } from '../Components/CartContext';
import PopUp from '../Components/PopUp';
import Payment from '../Components/Payment';
const Checkout = () => {
    const [buttonPopup, SetButtonPopup] = useState(false);
    const navigate = useNavigate()
    const { totalAmount } = UseCart()
    const Delivery = 500;
    const totalPayment = totalAmount + Delivery
    const [values, setValues] = useState({
        fname: "",
        email: "",
        amount: totalPayment,
    });

    const cart = () => {
        navigate("/cart")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className={classes.main}>
            <div className={classes.left}>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>
                            <i className="fas fa-shipping-fast"></i>
                            Shipping Details
                        </h1>
                        <form action="" onSubmit={handleSubmit} className={classes.form}>
                            <div className={classes.name}>
                                <div>
                                    <label htmlFor="fname">First</label>
                                    <input type="text" name="fname" onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" onChange={onChange} />
                                </div>
                            </div>
                            <div className={classes.street}>
                                <label htmlFor="name">Street</label>
                                <input type="text" name="address" />
                            </div>
                            <div className={classes.addressInfo}>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" />
                                </div>
                                <div>
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" />
                                </div>
                                <div>
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" name="zip" />
                                </div>
                            </div>

                            <button className={classes.btns} onClick={() => SetButtonPopup(true)}>Purchase</button>
                            <button className={classes.btns} onClick={cart} >Back to cart</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.order}>
                    <h1>Order Summery</h1>
                    <p>Sub total: &nbsp; &#8377;{totalAmount}</p>
                    <p>Delivery Chargers:&nbsp;  &#8377;{Delivery}</p>
                    <hr />
                    <p>Total:&nbsp;  &#8377;{totalPayment}</p>
                </div>
            </div>

            {/* Pop-up Is here  */}
            <PopUp trigger={buttonPopup} setTrigger={SetButtonPopup}>
                <Payment />
            </PopUp>

        </div>


    )
}

export default Checkout
