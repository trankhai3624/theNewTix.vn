import React from "react";
import useStyles from "./subCinemaStyle";
import Sub from "../../Img/FilmSchedule/Sub cinema/sub.jpg";
import { useDispatch, useSelector } from "react-redux";
import { DispatchMaCumRap } from "../../Container/HomeTemplate/Home/modules/action";
import { v4 as uuidv4 } from "uuid";

function SubCinema() {
  // ** LIBRARY
  const classes = useStyles();
  const dispatch = useDispatch();

  // ** GLOBAL STATE
  const cumRapGlobal = useSelector((state) => state.HomeReducer.cumRap);
  const cumRapListGlobal = useSelector((state) => state.HomeReducer.cumRapList);

  function dispatchMaCumRap(maCumRap) {
    dispatch(DispatchMaCumRap(maCumRap));
  }

  // ** RENDER CỤM RẠP
  const renderSubCinema = () => {
    if (cumRapListGlobal && cumRapListGlobal.length) {
      return cumRapListGlobal.map(({ tenCumRap, diaChi, maCumRap }) => {
        return (
          <div
            key={uuidv4()}
            className={`${classes.subCinema} ${
              maCumRap === cumRapGlobal ? classes.actived : classes.disabled
            }`}
            onClick={() => {
              dispatchMaCumRap(maCumRap);
            }}
          >
            <img className={classes.subLogo} src={Sub} alt="sub-logo" />
            <div className={classes.subInfo}>
              <p className={classes.subName}>{tenCumRap}</p>
              <p className={classes.subAddress}>{`${diaChi.slice(
                0,
                18
              )}...`}</p>
              <a href="#top" className={classes.detailInfo}>
                [chi tiết]
              </a>
            </div>
          </div>
        );
      });
    }
  };

  return <>{renderSubCinema()}</>;
}

export default SubCinema;
