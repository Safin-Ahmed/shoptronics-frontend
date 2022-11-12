import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/system";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "./PartnerBrand.module.css";
import Logo1 from "/public/static/brands/asus.jpg";
import Logo2 from "/public/static/brands/hp.png";
import Logo3 from "/public/static/brands/mi3.png";
import Logo4 from "/public/static/brands/nvidia-logo.png";

const data = [
  { id: 1, logo: Logo1 },
  { id: 2, logo: Logo2 },
  { id: 3, logo: Logo3 },
  { id: 4, logo: Logo4 },
];

function PartnerBrand() {
  return (
    <Box sx={{ width: "80%", margin: "auto", mb: 3 }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={7}
        slidesPerView={4}
        speed={500}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        touchRatio={1.5}
        effect={"flip"}
        className={classes.mySwiper}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id} className={classes.swiperSlider}>
            <Image
              width={200}
              height={100}
              alt="brand-logo"
              src={item.logo}
              className={classes.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
export default PartnerBrand;
