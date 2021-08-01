import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import useStyles from "./ngayChieuStyle";
import { useDispatch, useSelector } from "react-redux";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GioChieu from "./gioChieu";
import { DispatchNgayChieu } from "../../Container/HomeTemplate/Home/modules/action";

function NgayChieu() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const chonNgayGlobal = useSelector((state) => state.HomeReducer.chonNgay);

  const handleClick = (ngayChieu) => {
    if (ngayChieu === chonNgayGlobal) {
      setOpen(!open);
    }
    if (ngayChieu !== chonNgayGlobal) {
      dispatch(DispatchNgayChieu(ngayChieu));
      if (!open) {
        setOpen(!open);
      }
    }
  };

  const ngayListGlobal = useSelector((state) => state.HomeReducer.ngayList);

  // ** RENDER NGÀY CHIẾU
  const renderNgayChieu = () => {
    return ngayListGlobal.map((item) => {
      return (
        <div key={item}>
          <ListItem button onClick={() => handleClick(item)}>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${item.slice(8, 10)} - ${item.slice(5, 7)}`}
            />
            {open && item === chonNgayGlobal ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={open && item === chonNgayGlobal}
            timeout="auto"
            unmountOnExit
          >
            <GioChieu />
          </Collapse>
        </div>
      );
    });
  };

  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {renderNgayChieu()}
      </List>
    </>
  );
}

export default NgayChieu;
