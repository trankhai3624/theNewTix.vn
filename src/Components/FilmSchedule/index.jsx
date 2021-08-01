import React from "react";
import HeadCinema from "./headCinema";
import SubCinema from "./subCinema";
import useStyles from "./style";
// import { useSelector } from "react-redux";
import Movie from "./movie";
import SpaceBorder from "../SpaceBorder/index";

function FilmSchedule() {
  const classes = useStyles();
  // const err = useSelector((state) => state.HomeReducer.err);
  // console.log(err);

  return (
    <>
      <div className={`container ${classes.filmSchedule}`}>
        <div className={`${classes.headCinema} scrollbar`}>
          <HeadCinema />
        </div>
        <div className={`${classes.subCinema} ${classes.border} scrollbar `}>
          <SubCinema />
        </div>
        <div className={`${classes.showTime} scrollbar`}>
          <Movie />
        </div>
      </div>
      <SpaceBorder />
    </>
  );
}
export default FilmSchedule;
