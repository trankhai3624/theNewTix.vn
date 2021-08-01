import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchMaHeThongRap } from "../../Container/HomeTemplate/Home/modules/action";
import usestyles from "./headCinemaStyle";
import { v4 as uuidv4 } from "uuid";

function HeadCinema() {
  // ** LIBRARY
  const classes = usestyles();
  const dispatch = useDispatch();

  // ** GLOBAL STATE
  const schedule = useSelector((state) => state.HomeReducer.schedule);
  const heThongRapGlobal = useSelector((state) => state.HomeReducer.heThongRap);
  // ** RENDER HỆ THỐNG RẠP
  const renderHeaderCinema = () => {
    if (schedule && schedule.length) {
      return schedule?.map(({ logo, maHeThongRap }) => {
        return (
          <div
            key={uuidv4()}
            className={`${classes.headCinemaLogo} ${
              maHeThongRap === heThongRapGlobal
                ? classes.actived
                : classes.disabled
            }  `}
            onClick={() => {
              dispatch(DispatchMaHeThongRap(maHeThongRap));
            }}
          >
            <img
              className={classes.logoImg}
              src={logo}
              alt={`${maHeThongRap}-logo`}
            />
          </div>
        );
      });
    }
  };

  return (
    <div>
      {renderHeaderCinema()}
      <></>
    </div>
  );
}

export default HeadCinema;
