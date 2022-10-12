import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./boxingSlider.module.scss";


export default class BoxingSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows:false,
    };
    return (
      <div className={styles.block}>
        <Slider {...settings}>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}></div>
          </div>
        </Slider>
      </div>
    );
  }
}
