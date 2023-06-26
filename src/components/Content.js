import './content.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import React from "react";
// import { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Content(){
    return(
        <div id="content">
            <div className="show">
                {/* <ul className="all"> */}
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper01.jpg" alt="swiper01"/>
                            <figcaption>
                                <p>
                                나의 집, 나의 벗<br/>
                                망원도 애호가
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper02.jpg" alt="swiper02"/>
                            <figcaption>
                                <p>
                                코쿤의<br/>
                                귀가 빛나는 밤에
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper03.jpg" alt="swiper03"/>
                            <figcaption>
                                <p>
                                한샘몰<br/>
                                첫구매 혜택
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper04.jpg" alt="swiper04"/>
                            <figcaption>
                                <p>
                                2023<br/>
                                시즌오프
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper05.jpg" alt="swiper05"/>
                            <figcaption>
                                <p>
                                나를 움직이는 소파<br/>
                                MMVE
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src="./images/swiper06.jpg" alt="swiper06"/>
                            <figcaption>
                                <p>
                                한샘 수납가구<br/>
                                혜택 내비게이션
                                </p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                </Swiper>
                {/* </ul> */}
            </div>
        </div>
    );
}