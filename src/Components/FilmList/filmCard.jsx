import React from "react";
import useStyles from "./filmCardStyle";
import C1 from "../../Img/FIlmList/c1.png";
import { Typography } from "@material-ui/core";
import TransitionsModal from "../Modal";
function FilmCard({ item }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.filmCard}>
        <div className={classes.filmPoster}>
          <img className={classes.posterImg} src={C1} alt="film-poster" />
          <div className={classes.hoverOverlay}>
            <TransitionsModal />
          </div>
        </div>
        <div className={`${classes.filmInfo} `}>
          <div className={`${classes.infoTop} flexHorizon`}>
            <div className="ageTag">P</div>
            <Typography className={classes.filmName}>
              Bàn Tay Diệt Quỷ việt nam vô địch
            </Typography>
          </div>
          <div className={`${classes.infoBot} ${classes.filmLength}`}>
            100 phút
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmCard;
