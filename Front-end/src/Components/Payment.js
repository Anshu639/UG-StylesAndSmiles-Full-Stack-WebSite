import React, { useState } from 'react'
import styles from "./Payment.module.css"
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState("card");

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div>
            <form className={styles.form}>
                <div className={styles["checkout-method"]}>
                    <button
                        type="button"
                        className={`${styles.button} ${selectedMethod === "card" ? styles["button--active"] : ""
                            } ${styles["card-button"]}`}
                        onClick={() => handleMethodChange("card")}
                    >
                        <BsFillCreditCard2FrontFill />
                    </button>

                    <button
                        type="button"
                        className={`${styles.button} ${selectedMethod === "upi" ? styles["button--active"] : ""
                            } ${styles["upi-button"]}`}
                        onClick={() => handleMethodChange("upi")}
                    >
                        @UPI
                    </button>
                </div>

                {selectedMethod === "card" && (
                    <div className={styles["checkout-information"]}>
                        <div className={styles["input-group"]}>
                            <label htmlFor="name">Name on card</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter name"
                                className={styles["card-name-input"]}
                            />
                        </div>

                        <div className={styles["input-group"]}>
                            <label htmlFor="number">Card number</label>
                            <input
                                type="text"
                                id="number"
                                placeholder=".... "
                                className={styles["card-number-input"]}
                            />
                        </div>

                        <div className={styles["horizontal-grid"]}>
                            <div className={styles["input-group"]}>
                                <label htmlFor="date">Expiration date</label>
                                <input
                                    type="text"
                                    id="date"
                                    placeholder="12/27"
                                    className={styles["expiration-date-input"]}
                                />
                            </div>

                            <div className={styles["input-group"]}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="number"
                                    id="cvv"
                                    placeholder="CVV"
                                    className={styles["cvv-input"]}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {selectedMethod === "upi" && (
                    <div className={styles["checkout-information"]}>
                        <div className={styles["input-group"]}>
                            <label htmlFor="upi-id">UPI ID</label>
                            <input
                                type="text"
                                id="upi-id"
                                placeholder="Enter UPI ID"
                                className={styles["upi-id-input"]}
                            />
                        </div>
                    </div>
                )}

                <button
                    className={`${styles.button} ${styles["button--checkout"]} ${styles["checkout-button"]
                        }`}
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default Payment
