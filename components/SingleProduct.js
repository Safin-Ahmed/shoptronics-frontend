
import Image from 'next/image';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SingleProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" > </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" ></Image>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" > </Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
