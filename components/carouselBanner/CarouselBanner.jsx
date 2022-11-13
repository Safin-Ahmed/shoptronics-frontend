import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from './CarouselBanner.module.css';
import bannerImg1 from '/public/static/banner-mockup1.png';
import bannerImg2 from '/public/static/banner-mockup2.png';
import { Box } from '@mui/system';

const bannerData = [
  {
    id: 1,
    title: "Hot deal this week",
    desc: "Intelectial Digital",
    name: "Computer",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: bannerImg1,
    priceTag: 97,
  },
  {
    id: 2,
    title: "Hot deal this week",
    desc: "Smart Digital",
    name: "Watch",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: bannerImg2,
    priceTag: 97,
  },
  {
    id: 3,
    title: "Hot deal this week",
    desc: "Intelectial Digital",
    name: "Computer",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: bannerImg1,
    priceTag: 97,
  },
  {
    id: 4,
    title: "Hot deal this week",
    desc: "Smart Digital",
    name: "Watch",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: bannerImg2,
    price: 97,
  },
];

const CarouselBanner = () => {
  const handleClick = () => console.log('clicked');

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={500}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      touchRatio={1.5}
      effect={"flip"}
      className={classes.mySwiper}
    >
      {bannerData.map((banner) => (
        <SwiperSlide key={banner.id} className={classes.swiperSlider}>
          <div className={classes.bgImg}>
            <div className={classes.content}>
              <h4>{banner.title}</h4>
              <h1>
                {banner.desc} <span>{banner.name}</span>
              </h1>
              <div className={classes.btnSection}>
                <button>Buy Now</button>
                <div className={classes.ratingSection}>
                  <p>{banner.rating} </p>
                  <p>{banner.review}</p>
                </div>
              </div>
            </div>
            <Box>
            <Image
        
          src={banner.bannerImg}
          alt="img"
          className={classes.slideImg}
        />
            </Box>
            <div className={classes.priceTag}>
              <h1>${banner.priceTag}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselBanner;
