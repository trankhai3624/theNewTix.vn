// import axios from "axios";
import * as ActionType from "./constants";
import axios from "../../../AxiosConfig/axiosConfig";

// ** LẤY THÔNG TIN PHIM
export const LayThongTinPhim = (MaPhim) => {
  return (dispatch) => {
    dispatch(LayThongTinPhimRequest());
    axios({
      method: "GET",
      url: "/QuanLyPhim/LayThongTinPhim",
      params: {
        MaPhim: MaPhim,
      },
    })
      .then((result) => {
        dispatch(LayThongTinPhimSuccess(result.data));
        return result.data;
      })
      .catch((err) => {
        dispatch(LayThongTinPhimFailed(err.response));
        return err.response;
      });
  };
};

const LayThongTinPhimRequest = () => {
  return {
    type: ActionType.LayThongTinPhimRequest,
  };
};

const LayThongTinPhimSuccess = (data) => {
  return {
    type: ActionType.LayThongTinPhimSuccess,
    payload: data,
  };
};
const LayThongTinPhimFailed = (data) => {
  return {
    type: ActionType.LayThongTinPhimFailed,
    payload: data,
  };
};
