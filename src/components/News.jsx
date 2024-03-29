import { useState } from "react";
import classes from "../modules/News.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import layout from "../modules/Layout.module.scss";
import RightArrow from "../assets/right-arrow.svg";
import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.jpg";
import Image4 from "../assets/image-4.jpg";
import Button from "../UI/Button";

const News = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideChangeHandler = (swiper) => {
    if (swiper.activeIndex == 5) {
      setActiveSlide(0);
    }
  };

  const swiperCardData = [
    {
      heading: "There are many variations of passages",
      date: "22 April 2023",
      imageUrl: Image1,
    },
    {
      heading: "The point of using Lorem Ipsum",
      date: "20 April 2023",
      imageUrl: Image2,
    },
    {
      heading: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
      imageUrl: Image3,
    },
    {
      heading: "On the other hand, we denounce with righteous indignation",
      date: "15 April 2023",
      imageUrl: Image4,
    },
    {
      heading: "There are many variations of passages",
      date: "22 April 2023",
      imageUrl: Image1,
    },
    {
      heading: "The point of using Lorem Ipsum",
      date: "20 April 2023",
      imageUrl: Image2,
    },
    {
      heading: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
      imageUrl: Image3,
    },
    {
      heading: "",
      date: "",
      imageUrl: "",
    },
    {
      heading: "",
      date: "",
      imageUrl: "",
    },
    {
      heading: "",
      date: "",
      imageUrl: "",
    },
    {
      heading: "",
      date: "",
      imageUrl: "",
    },
    {
      heading: "",
      date: "",
      imageUrl: "",
    },
  ];

  return (
    <section id="projects" className={classes["news-wrapper"]}>
      <div className={`${classes["container"]} ${layout["container"]}`}>
        <div className={classes["top-bar"]}>
          <h2>News</h2>
          <div className={classes["arrows-wrapper"]}>
            <img
              className={`swipper-prev-button ${classes["swiper-button-prev"]}`}
              src={RightArrow}
              alt="left-arrow"
            />

            <img
              className={`swipper-next-button ${classes["swiper-button-next"]}`}
              src={RightArrow}
              alt="right-arrow"
            />
          </div>
        </div>

        <div className={classes["swiper"]}>
          
          <Swiper
            className={classes["swiper-wrapper"]}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            rewind={true}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
              slideChangeHandler(swiper);
              if (swiper.activeIndex >= 5) {
                swiper.slideTo(0);
              }
              // console.log(swiper.activeIndex);
            }}
            spaceBetween={0}
            slidesPerView={"auto"}
            navigation={{
              prevEl: ".swipper-prev-button",
              nextEl: ".swipper-next-button",
            }}>

            {swiperCardData.map((item, index) => (
              <SwiperSlide className={`${classes["swiper-slide"]}`} key={index}>
                <div className={`${classes["swiper-card"]}`}>
                  <div
                    className={`${classes["image-container"]} ${
                      activeSlide == index && classes["active"]
                    }`}
                  >
                    <img
                      className={classes["swiper-card-img"]}
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className={classes["swiper-card-content"]}>
                    <h3>{item.heading}</h3>
                    <time>{item.date}</time>
                    <Button label={"See More"} primary />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
