import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import styles from './index.module.sass';
import {Navigation} from "swiper";
import {Banner} from "./BannerComponent";

import banners, {BannerInterface} from './BannerComponent/BannersArray'


export const Carousel = () => {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>

                {banners.map((banner: BannerInterface) => (
                    <SwiperSlide key={banner.id}>
                        <Banner
                            text={banner.text}
                            header={banner.header}
                            backgroundColor={banner.backgroundColor}
                            backgroundImg={banner.backgroundImg}
                            buttonText={banner.buttonText}
                        />
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    );
}
