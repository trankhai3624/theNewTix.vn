import React from "react";
import useStyles from "./style";
import { Typography } from "@material-ui/core";
import Next from "../../Img/Carousel/next.png";
import Back from "../../Img/Carousel/back.png";
import C1 from "../../Img/FIlmList/c1.png";
import C2 from "../../Img/FIlmList/c2.png";
import C3 from "../../Img/FIlmList/c3.png";
import C4 from "../../Img/FIlmList/c3.png";
import FilmCard from "./filmCard";
import Slider from "react-slick";
import SpaceBorder from "../SpaceBorder";
import { v4 as uuidv4 } from "uuid";

function FilmList() {
  const classes = useStyles();
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <img
        className={`${classes.navImg} ${classes.arrowNext}`}
        src={Next}
        alt="arrow"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <img
        className={`${classes.navImg} ${classes.arrowBack}`}
        src={Back}
        alt="arrow"
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    accessibility: true,
    arrows: true,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const renderfilmItem = () => {
    const filmArray = [C1, C2, C3, C4];
    return filmArray.map((item, index) => {
      return <FilmCard data={item} key={uuidv4()} />;
    });
  };
  return (
    <>
      <div className={classes.filmList}>
        <div className={` container `}>
          <div className={`${classes.headList} flexHorizon`}>
            <Typography className={`${classes.tabsMenu} ${classes.active}`}>
              Đang Chiếu
            </Typography>
            <Typography className={`${classes.tabsMenu}`}>Sắp Chiếu</Typography>
          </div>
          <div className={classes.listContent}>
            <Slider {...settings}>
              {renderfilmItem()}
              {renderfilmItem()}
              {renderfilmItem()}
            </Slider>
          </div>
        </div>
      </div>
      <SpaceBorder />
    </>
  );
}

export default FilmList;
