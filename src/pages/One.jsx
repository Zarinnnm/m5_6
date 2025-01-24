import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './One.css'


export default function One() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <img src="https://img.lovepik.com/bg/20231218/cute-wallpapers-cats-wallpapers-hd-4k-wallpapers-desktop-wallpapers-hd_2615259_wh860.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/premium-photo/cute-cat-wallpaper-hd-8k-wallpaper-stock-photographic-image_890746-22400.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnaDcLW2otwbkozHfjwm00QWxVJemBmGelA&s" alt=""/>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
