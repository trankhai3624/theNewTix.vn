import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./gioChieuStyle";
// import { v4 as uuidv4 } from "uuid";

function GioChieu() {
  const classes = useStyles();
  const gioListGlobal = useSelector((state) => state.HomeReducer.gioList);

  const renderGioChieu = () => {
    return gioListGlobal.map((item) => {
      return (
        <div className={classes.gioChieuItem} key={item.maLichChieu}>
          <p>{item.ngayChieuGioChieu.slice(11, 16)}</p>
        </div>
      );
    });
  };
  return <div className={classes.gioChieuContainer}>{renderGioChieu()}</div>;
}

export default GioChieu;
