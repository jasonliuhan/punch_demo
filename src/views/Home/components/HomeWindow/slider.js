import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./slider.module.scss";

export default class SliderAutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows:false
    };
    return (
      <div className={styles.block}>
        <Slider {...settings}>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00001.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00002.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1.025rem" }}
              src="https://www.jasontaylor.club/img/swiper00003.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "0.69rem" }}
              src="https://www.jasontaylor.club/img/swiper00004.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00001.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00002.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1.025rem" }}
              src="https://www.jasontaylor.club/img/swiper00003.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "0.69rem" }}
              src="https://www.jasontaylor.club/img/swiper00004.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00001.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00002.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1.025rem" }}
              src="https://www.jasontaylor.club/img/swiper00003.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "0.69rem" }}
              src="https://www.jasontaylor.club/img/swiper00004.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00001.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1rem" }}
              src="https://www.jasontaylor.club/img/swiper00002.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "1.025rem" }}
              src="https://www.jasontaylor.club/img/swiper00003.png"
            />
          </div>
          <div className={styles.sliderItem}>
            <img
              style={{ height: "0.69rem" }}
              src="https://www.jasontaylor.club/img/swiper00004.png"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
