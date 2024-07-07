import React from 'react';
import styles from './SliderCard.module.css';
import { useNavigate } from 'react-router-dom';
import { UseCart } from './CartContext';
const ProductSliderCard = (props) => {
    const { id, title, description, price, img, quantity } = props;
    const navigate = useNavigate();
    const { addItem } = UseCart();

    const handleAddToCart = () => {
        const item = { id, title, description, price, img, quantity };
        addItem(item);
    };

    const navigateToCArt = () => {
        navigate("/cart")
    }


    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>&#8377;{price}</p>
                <button className={styles.button} onClick={() => { handleAddToCart(); navigateToCArt() }} >Buy Now</button>
                <button className={styles.button} onClick={handleAddToCart}>Add to Cart</button>

            </div>
        </div >
    );
};

export default ProductSliderCard;
