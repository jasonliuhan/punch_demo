import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./homeWindow.module.scss";

import LogoText from "../../../../assets/home/logoText.png";
import Button from "../../../../assets/home/button.png";
import DayUnit from "../../../../assets/home/Days.png";
import HoursUnit from "../../../../assets/home/Hours.png";
import MinutesUnit from "../../../../assets/home/Minutes.png";
import SecondsUnit from "../../../../assets/home/Seconds.png";

export default class HomeWindow extends Component {
  state = {
    isshow: false,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  };

  swiperAnimation = () => {
    setTimeout(() => {
      this.setState({
        isshow: true,
      });
    }, 2000);
  };

  showTime = () => {
    let nowTime = new Date(); //获取当前时间
    let setTime = new Date("2022/11/11"); //设置结束时间

    let remianAllSeconds = Math.floor(
      (setTime.getTime() - nowTime.getTime()) / 1000
    ); //剩余总秒数
    let remainDays = Math.floor(remianAllSeconds / (60 * 60 * 24)); //剩余天数
    let remainHours = Math.floor((remianAllSeconds / (60 * 60)) % 24); //剩余小时数
    let remainMinutes = Math.floor((remianAllSeconds / 60) % 60); //剩余分钟数
    let remainSeconds = Math.floor(remianAllSeconds % 60); //剩余秒数
    let str = `${remainDays}:${remainHours}:${remainMinutes}:${remainSeconds}`;
    this.setState({
      Days: remainDays,
      Hours: remainHours,
      Minutes: remainMinutes,
      Seconds: remainSeconds,
    });
  };

  componentDidMount() {
    this.swiperAnimation();
    setInterval(() => {
      this.showTime();
    }, 1000);
  }

  render() {
    return (
      <div className={styles.home_page}>
        <div className={styles.headBlock}>
        <div className={styles.video_block}>
          <video
            className={`${styles.video} ${
              this.state.isshow ? styles.show : styles.hidden
            }`}
            autoPlay
            loop
            muted
            src="./loop.mp4"
          ></video>
          <video
            className={`${styles.video} ${
              this.state.isshow ? styles.hidden : styles.show
            }`}
            autoPlay
            muted
            src="./start.mp4"
          ></video>
        </div>
        <div className={styles.logoBlock}>
          <img src={LogoText} />
        </div>
        <div className={styles.timeBlock}>
        <div className={styles.timeDown}>
            <div className={styles.timeText}>{this.state.Days}</div>
            <div>:</div>
            <div className={styles.timeText}>{this.state.Hours}</div>
            <div>:</div>
            <div className={styles.timeText}>{this.state.Minutes}</div>
            <div>:</div>
            <div className={styles.timeText}>{this.state.Seconds}</div>
          </div>
          <div className={styles.timeUnit}>
            <img src={DayUnit}></img>
            <img src={HoursUnit} />
            <img src={MinutesUnit} />
            <img src={SecondsUnit} />
          </div>
   
        </div>
        <div className={styles.buttonBlock}>
          <img src={Button} />
        </div>
        </div>
      </div>
    );
  }
}
