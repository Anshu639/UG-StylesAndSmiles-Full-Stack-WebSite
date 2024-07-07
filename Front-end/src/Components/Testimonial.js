import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonial.css";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import pic1 from "../Images/AakashBhatt.jpg"
import pic2 from "../Images/Aashish.jpg"
import pic3 from "../Images/darshan-patel.jpg"
import pic4 from "../Images/gill.jpg"
import pic5 from "../Images/impress.jpg"
import pic6 from "../Images/pargat.jpg"
import pic7 from "../Images/Pujji.jpg"
import pic8 from "../Images/sohaib.jpg"
import pic9 from "../Images/sadhukhan.jpg"

import Card from "./Card";

const data = [
    {
        id: 1,
        image: pic1,
        name: "Aakash Bhatt",
        feedback: "I've been going to Styles n' Smiles for years, and I'm always impressed with the quality of their work. The staff always listen to what I want. I highly recommend this salon!",
        rating: 5
    },

    {
        id: 2,
        image: pic2,
        name: "Sarah",
        feedback: "I had a great experience at Styles n' Smiles. The stylist was very knowledgeable and helped me choose the perfect cut for my face shape. I left feeling confident and beautiful!",
        rating: 4.5
    },

    {
        id: 3,
        image: pic3,
        name: "Naman",
        feedback: "I was a little nervous about getting my hair colored for the first time, but the staff at Styles n' Smiles put me at ease. They took the time to explain the process and helped me choose the perfect shade.",
        rating: 4
    },

    {
        id: 4,
        image: pic4,
        name: "Smitri Singh",
        feedback: "I always enjoy my visits to Styles n' Smiles. The atmosphere is relaxing and the staff is always friendly. Plus, they do an amazing job with my hair!",
        rating: 5
    },

    {
        id: 5,
        image: pic5,
        name: "Abhishek Bhatt",
        feedback: "I went to Styles n' Smiles for a haircut and was blown away by the attention to detail. The stylist took the time to make sure everything was perfect, and I couldn't be happier with the results.",
        rating: 4.5
    },
    {
        id: 6,
        image: pic6,
        name: "Shafali Varma",
        feedback: "I've tried many salons over the years, but Styles n' Smiles is by far my favorite. The staff is knowledgeable and friendly, and they always go above and beyond to make sure I'm happy with my hair.",
        rating: 5
    },

    {
        id: 7,
        image: pic7,
        name: "Aman",
        feedback: "I recently got a haircut at Styles n' Smiles, and I was impressed with the level of skill and professionalism. The stylist really listened to what I wanted and gave me a cut that looks great.",
        rating: 4
    },

    {
        id: 8,
        image: pic8,
        name: "Ali Ansari",
        feedback: "I had a fantastic experience at Styles n' Smiles. The staff is friendly and welcoming, and they did an amazing job with my hair. I will definitely be back!",
        rating: 5
    },

    {
        id: 9,
        image: pic9,
        name: "Priyanka",
        feedback: "I've been going to Styles n' Smiles for years, and I've never had a bad experience. The stylists are skilled and professional, and they always make sure I leave happy.",
        rating: 5
    }
]

const breakpoints = {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 3,
        spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 3,
        spaceBetween: 40
    }
}



const Testimonial = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                breakpoints={breakpoints}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"

            >
                {data.map(user => (
                    <SwiperSlide key={user.id} className="slide">
                        <Card img={user.image} title={user.name} info={user.feedback} rating={user.rating} />
                    </SwiperSlide>
                ))}

            </Swiper>

        </div >
    )
}

export default Testimonial
