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
    const params = {
        nextEl: '.' + styles.swiper_button_next,
        prevEl: '.' + styles.swiper_button_prev
    }
    return (
        <>
            <Swiper className={styles.mySwiper} navigation={params} modules={[Navigation]}>
                <button className={styles.swiper_button_prev}></button>
                <button className={styles.swiper_button_next}></button>
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
