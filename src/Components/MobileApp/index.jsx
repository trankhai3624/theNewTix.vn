import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import Screen from "../../Img/MobileApp/screen.png";
import Slide10 from "../../Img/MobileApp/sl1.jpg";
import Slide8 from "../../Img/MobileApp/sl2.jpg";
import Slide5 from "../../Img/MobileApp/sl3.jpg";
import Slide4 from "../../Img/MobileApp/sl4.jpg";
import Slide3 from "../../Img/MobileApp/sl5.jpg";
import Slide6 from "../../Img/MobileApp/sl6.jpg";
import Slide7 from "../../Img/MobileApp/sl7.jpg";
import Slide2 from "../../Img/MobileApp/sl8.jpg";
import Slide9 from "../../Img/MobileApp/sl9.jpg";
import Slide1 from "../../Img/MobileApp/sl10.jpg";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

function MobileApp() {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const sliderList = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
  ];

  const renderSliderItem = () => {
    return sliderList.map((item) => {
      return (
        <img
          className={classes.sliderItem}
          src={item}
          key={uuidv4()}
          alt="app-slider"
        />
      );
    });
  };

  return (
    <div className={`${classes.mobileApp} flexHorizon`}>
      <Grid className="container" container>
        <Grid className={classes.leftContent} item xs={6}>
          <p className={classes.title}>
            Ứng dụng tiện lợi dành cho người yêu điện ảnh
          </p>
          <br />
          <p className={classes.text}>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <br />
          <button className={classes.button}>
            App miễn phí - Tải về ngay!
          </button>
          <p className={classes.text}>
            TIX có hai phiên bản
            <a className={classes.link} href="#bottom">
              {" "}
              iOS{" "}
            </a>
            &
            <a className={classes.link} href="#bottom">
              {"  "}
              Android{" "}
            </a>
          </p>
        </Grid>
        <Grid item xs={6} className={``}>
          <div className={`${classes.appSlider} `}>
            <img className={classes.screen} src={Screen} alt="" />
            <Slider className={classes.slider} {...settings}>
              {renderSliderItem()}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MobileApp;
