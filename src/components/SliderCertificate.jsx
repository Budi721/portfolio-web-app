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
import cert5 from '@/images/certificates/google-certif.png'
import cert6 from '@/images/certificates/postgres=certif.png'
import cert7 from '@/images/certificates/python-certif.png'
import Image from "next/image";

export default function SliderCertificate() {
  return (
    <>
      <Swiper
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
        className="mySwiper border-2 rounded-md h-[28rem] md:h-[42rem]"
      >
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert1}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert2}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert3}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert4}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert5}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert6}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-fill w-full h-[28rem] md:h-[42rem]"
            src={cert7}
            alt="image slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}