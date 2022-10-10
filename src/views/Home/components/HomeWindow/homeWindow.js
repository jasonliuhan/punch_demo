import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

import SliderAutoPlay from "./slider";

import styles from "./homeWindow.module.scss";

import "animate.css";

import LogoText from "../../../../assets/home/logoText.png";
import Button from "../../../../assets/home/button.png";
import DayUnit from "../../../../assets/home/Days.png";
import HoursUnit from "../../../../assets/home/Hours.png";
import MinutesUnit from "../../../../assets/home/Minutes.png";
import SecondsUnit from "../../../../assets/home/Seconds.png";

import SwiperImg1 from "../../../../assets/home/swiper00001.png";
import SwiperImg2 from "../../../../assets/home/swiper00002.png";
import SwiperImg3 from "../../../../assets/home/swiper00003.png";
import SwiperImg4 from "../../../../assets/home/swiper00004.png";

import HeadPortrait1 from "../../../../assets/home/Mask group1.png";
import HeadPortrait2 from "../../../../assets/home/Mask group2.png";
import HeadPortrait3 from "../../../../assets/home/Mask group3.png";
import HeadPortrait4 from "../../../../assets/home/Mask group4.png";

export default class HomeWindow extends Component {
  state = {
    isshow: false,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    v1: "video1",
    float: false,
    textYValue: null,
    textShow: false,
    balloonCardYValue: null,
    balloonCardShow: false,
  };

  goWeb = () => {
    const url = "https://forms.gle/jkNPfDQPxtYqzcFf8";
    window.open(url);
  };
  goPDF = () => {
    const url = "./Punch Games TOS.pdf";
    window.open(url);
  };

  swiperAnimation = () => {
    this.setState({
      isshow: true,
    });
  };

  showTime = () => {
    let nowTime = new Date(); //获取当前时间
    let setTime = new Date("2022/10/23"); //设置结束时间

    let remianAllSeconds = Math.floor(
      (setTime.getTime() - nowTime.getTime()) / 1000
    );
    //剩余总秒数
    let remainDays = Math.floor(remianAllSeconds / (60 * 60 * 24)); //剩余天数
    if (remainDays < 10) {
      remainDays = "0" + remainDays;
    }
    let remainHours = Math.floor((remianAllSeconds / (60 * 60)) % 24); //剩余小时数
    if (remainHours < 10) {
      remainHours = "0" + remainHours;
    }
    let remainMinutes = Math.floor((remianAllSeconds / 60) % 60); //剩余分钟数
    if (remainMinutes < 10) {
      remainMinutes = "0" + remainMinutes;
    }
    let remainSeconds = Math.floor(remianAllSeconds % 60); //剩余秒数
    if (remainSeconds < 10) {
      remainSeconds = "0" + remainSeconds;
    }
    let str = `${remainDays}:${remainHours}:${remainMinutes}:${remainSeconds}`;
    this.setState({
      Days: remainDays,
      Hours: remainHours,
      Minutes: remainMinutes,
      Seconds: remainSeconds,
    });
  };

  bindEvents() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const scrollY = window.scrollY || 0;
    let delta = Math.abs(scrollY);

    if (scrollY > this.state.textYValue) {
      this.setState({
        textShow: true,
      });
    }

    if (scrollY > this.state.balloonCardYValue) {
      this.setState({
        balloonCardShow: true,
      });
    }
  }

  // 监听
  watchVideo = () => {
    var elevideo = document.getElementById("video1");
    console.log(elevideo);
    elevideo.addEventListener(
      "ended",
      () => {
        //结束
        console.log("播放结束");
        this.swiperAnimation();
      },
      false
    );
  };

  componentDidMount() {
    this.watchVideo();
    this.bindEvents();
    this.getY();
    setInterval(() => {
      this.showTime();
    }, 1000);
  }

  getY = () => {
    let anchorElement = document.getElementById("text").offsetTop;
    let balloonCardYValue = document.getElementById("balloon").offsetTop;
    this.setState({
      textYValue: anchorElement,
      balloonCardYValue,
    });
  };

  render() {
    return (
      <div className={styles.home_page}>
        <div
          className={`${styles.headBlock}  ${
            this.state.float ? styles.headFloat : ""
          }`}
        >
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
              id={this.state.v1}
              className={`${styles.video}`}
              autoPlay
              muted
              src="./start.mp4"
            ></video>
          </div>
          <div
            className={`${styles.logoBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <img src={LogoText} />
          </div>
          <div
            className={`${styles.timeBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <div className={styles.timeDown}>
              <div className={styles.timeText}>{this.state.Days}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Hours}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Minutes}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Seconds}</div>
            </div>
            <div className={styles.timeUnit}>
              <img src={DayUnit}></img>
              <img src={HoursUnit} />
              <img src={MinutesUnit} />
              <img src={SecondsUnit} />
            </div>
          </div>
          <div
            onClick={() => {
              this.goWeb();
            }}
            className={`${styles.buttonBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <img src={Button} />
          </div>
        </div>

        <div className={styles.balloonBlock} id={"balloon"}>
          <video
            className={`${styles.balloonVideo}`}
            autoPlay
            loop
            muted
            src="./balloonVideo.mp4"
          ></video>
          <div
            className={`${styles.balloonCardBlock} ${
              this.state.balloonCardShow
                ? styles.balloonCardBlockActive +
                  " animate__animated animate__zoomIn"
                : ""
            }`}
          >
            <div className={styles.balloonCard}>
              <div className={styles.cardImg}>
                <img className={styles.img} src={HeadPortrait1} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.niName}>Boxi Wang</div>
                <div className={styles.position}>Chief Executive Officer</div>
              </div>
            </div>
            <div className={styles.balloonCard}>
              <div className={styles.cardImg}>
                <img className={styles.img} src={HeadPortrait2} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.niName}>Oren Bennett</div>
                <div className={styles.position}>Chief Business Officer</div>
              </div>
            </div>
            <div className={styles.balloonCard}>
              <div className={styles.cardImg}>
                <img className={styles.img} src={HeadPortrait3} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.niName}>William Ni</div>
                <div className={styles.position}>Chief Technology Officer</div>
              </div>
            </div>
            <div className={styles.balloonCard}>
              <div className={styles.cardImg}>
                <img className={styles.img} src={HeadPortrait4} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.niName}>Danni Hu</div>
                <div className={styles.position}>Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.friendBlock}>
          <div className={styles.friendVideo}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./friendVideo.mp4"
            ></video>
          </div>
          <div
            id={"text"}
            className={`${styles.friendText} ${
              this.state.textShow
                ? styles.myElement + " animate__animated animate__zoomIn"
                : ""
            } `}
          >
            Our Backer
          </div>
        </div>

        <div className={styles.swiperBlock}>
          <SliderAutoPlay />
        </div>

        <div className={styles.surpriseGift}>
          <video
            className={`${styles.boxVideo}`}
            autoPlay
            loop
            muted
            src="./box.mp4"
          ></video>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.bottomLogo}>
            <img className={styles.bottomLogoImg} src={LogoText} />
          </div>
          <div className={styles.ActiveText}>
            <div className={styles.ActiveTextBox}>
              <div>Links</div>
              <div className={styles.text}>Terms</div>
              <div className={styles.text}>Privacy Policy</div>
            </div>
          </div>
          <Link className={`${styles.link}`} to={`/agreement/${"type"}`}>
            Terms & Conditions of Service
          </Link>
        </div>
      </div>
    );
  }
}
