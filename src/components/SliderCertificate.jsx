import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation, Pagination} from "swiper";

import cert1 from '@/images/certificates/android-certif.png'
import cert2 from '@/images/certificates/bakti-certif.png'
import cert3 from '@/images/certificates/golang-certif.png'
import cert4 from '@/images/certificates/kominfo-certif.png'
import Image from "next/image";

export default function SliderCertificate() {
  return (
    <>
      <Swiper
        style={{height:'42rem'}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper border-2 rounded-md"
      >
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[42rem]"
            src={cert1}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[42rem]"
            src={cert2}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[42rem]"
            src={cert3}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[42rem]"
            src={cert4}
            alt="image slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}