import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useStyles from "./movieStyle";
import NgayChieu from "./ngayChieu";
import { DispatchMaPhim } from "../../Container/HomeTemplate/Home/modules/action";

function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const chonPhimGlobal = useSelector((state) => state.HomeReducer.chonPhim);
  // console.log(chonPhimGlobal);

  // * HANDLE OPEN LIST
  // open flag
  const [open, setOpen] = React.useState(false);
  // handle click open
  const handleClick = (maPhim) => {
    if (maPhim === chonPhimGlobal) {
      setOpen(!open);
    }
    if (maPhim !== chonPhimGlobal) {
      dispatch(DispatchMaPhim(maPhim));
      if (!open) {
        setOpen(!open);
      }
    }
  };

  const filmListGlobal = useSelector((state) => state.HomeReducer.filmList);

  const renderFilmList = () => {
    if (filmListGlobal && filmListGlobal.length) {
      return filmListGlobal.map(({ maPhim, tenPhim, hinhAnh }) => {
        return (
          <div className={classes.filmContainer} key={maPhim}>
            <div
              className={classes.filmTag}
              onClick={() => {
                handleClick(maPhim);
              }}
            >
              <img
                className={classes.filmImg}
                src={hinhAnh}
                alt={`${tenPhim} ${maPhim}`}
              />
              <p className={classes.filmName}>{tenPhim}</p>
              {open && maPhim === chonPhimGlobal ? (
                <ExpandLess className={classes.expand} />
              ) : (
                <ExpandMore className={classes.expand} />
              )}
            </div>
            <Collapse
              className={`${
                maPhim === chonPhimGlobal ? classes.display : classes.hidden
              }`}
              in={open && maPhim === chonPhimGlobal}
              timeout="auto"
              unmountOnExit
            >
              <NgayChieu
                className={`${
                  maPhim === chonPhimGlobal ? classes.display : classes.hidden
                }`}
                maPhim={maPhim}
              />
            </Collapse>
          </div>
        );
      });
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // className={classes.root}
    >
      {renderFilmList()}
    </List>
  );
}

export default Movie;
