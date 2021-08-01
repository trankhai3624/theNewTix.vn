import React from "react";
import Carousel from "react-material-ui-carousel";
import useStyles from "./style";
import CarouselItem from "./carouselItem";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Next from "../../Img/Carousel/next.png";
import Back from "../../Img/Carousel/back.png";
import C1 from "../../Img/Carousel/1.png";
import C2 from "../../Img/Carousel/2.jpg";
import C3 from "../../Img/Carousel/3.png";

function CarouselSlider() {
  const classes = useStyles();
  const setting = {
    NextIcon: <img className={classes.navImg} src={Next} alt="" />,
    PrevIcon: <img className={classes.navImg} src={Back} alt="" />,
    navButtonsWrapperProps: {
      style: {
        top: "50%",
        transform: "translateY(-50%)",
      },
    },
    navButtonsProps: {
      style: {
        backgroundColor: "rgb(0,0,0,0.5)",
      },
    },
    navButtonsAlwaysVisible: true,
    animation: "fade",
    swipe: true,

    indicatorContainerProps: {
      style: {
        position: "absolute",
        bottom: 55,
      },
    },
    indicatorIconButtonProps: {
      style: { margin: "0 10px" },
    },
  };

  const poster = [C1, C2, C3];

  const danhSachPhim = useSelector((state) => state.HomeReducer.danhSachPhim);

  let arr = [];
  if (danhSachPhim.length > 0) {
    for (let i = 0; i < 3; i++) {
      arr.push(danhSachPhim[i]);
      arr[i].hinhAnh = poster[i];
    }
  }

  const renderCarouselItem = () => {
    return arr.map((item) => {
      return <CarouselItem data={item} key={uuidv4} />;
    });
  };

  return (
    <>
      <Carousel fullHeightHover={false} {...setting}>
        {renderCarouselItem()}
      </Carousel>
    </>
  );
}

export default CarouselSlider;
