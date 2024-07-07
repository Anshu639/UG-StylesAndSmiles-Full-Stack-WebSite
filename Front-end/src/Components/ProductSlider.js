import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { products } from "./product"
import ProductSliderCard from "./ProductSliderCard";


const breakpoints = {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 4,
        spaceBetween: 40
    }
}

const ProductSlider = () => {
    return (
        <div className="slider-div">
            <Swiper
                cssMode={true}
                slidesPerView={4}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                breakpoints={breakpoints}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {products.map(product => (
                    <SwiperSlide key={product.id} >
                        <ProductSliderCard id={product.id} img={product.img} title={product.title} price={product.price} description={product.description} quantity={product.quantity} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    )
}

export default ProductSlider
