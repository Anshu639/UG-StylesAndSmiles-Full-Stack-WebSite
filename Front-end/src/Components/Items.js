import React from 'react'
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { UseCart } from './CartContext';
import styles from '../Pages/Cart.module.css';
const Items = ({ id, description, title, img, price, quantity }) => {

    const { removeItem, increment, decrement } = UseCart()
    return (
        <>
            <div className={styles['items-info']}>
                <div className={styles['product-img']}>
                    <img src={img} alt="" />
                </div>
                <div className={styles['title']}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles['add-minus-quantity']}>
                    <FaMinus className={styles['minus']} onClick={() => decrement(id)} />
                    <input type="text" placeholder={quantity} />
                    <FaPlus className={styles['add']} onClick={() => { increment(id) }} />
                </div>
                <div className={styles['price']}>
                    <h3>{price} Rs</h3>
                </div>
                <div className={styles['remove-item']}>
                    <FaTrashAlt className={`${styles['fa']} ${styles['fa-trash-alt']} ${styles['remove']}`} onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items
