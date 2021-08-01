import React from "react";
import TransitionsModal from "../Modal";
import useStyles from "./style";

function CarouselItem({ data }) {
  const classes = useStyles();
  // console.log(data);
  // const
  return (
    <a href={`/movie/${data.maPhim}-${data.biDanh}`}>
      <div className={classes.carouselItem}>
        <img
          className={classes.carouselImg}
          src={data.hinhAnh}
          alt="film-poster"
        />
        <div className={classes.hoverOverlay}>
          <TransitionsModal trailer={data.trailer} />
        </div>
      </div>
    </a>
  );
}

export default CarouselItem;
