import React from "react";
import useStyles from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieDetailInfo({ movieDetail }) {
  const classes = useStyles();
  const { tenPhim, hinhAnh, ngayKhoiChieu, danhGia, moTa, trailer } =
    movieDetail;

  console.log(movieDetail);

  return (
    <div className={classes.movieDetail}>
      <div className="container">
        <div className={`${classes.topContent}`}>
          <img className={classes.movieImg} src={hinhAnh} alt="movie-poster" />
          <div className={classes.movieInfo}>
            <p className={classes.infoText}>
              {`${ngayKhoiChieu?.slice(8, 10)} - 
              ${ngayKhoiChieu?.slice(5, 7)} - 
              ${ngayKhoiChieu?.slice(0, 4)} `}
            </p>
            <p className={classes.filmTitle}>
              {" "}
              <span className={`ageTag ${classes.ageTag}`}>P</span>{" "}
              <span className={classes.infoTitle}>{tenPhim}</span>
            </p>
            <p className={classes.infoText}>120 phút - 0 IMDb - 2D/Digital</p>
          </div>
          <div className={classes.rating}>
            <CircularProgressbar
              value={danhGia}
              text={`${danhGia}`}
              maxValue={10}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#222831",
                textColor: "#fff",
                pathColor: "#00f3ff",
                trailColor: "transparent",
              })}
            />
          </div>
        </div>
        <div className={classes.botContent}></div>
      </div>
    </div>
  );
}

export default MovieDetailInfo;
