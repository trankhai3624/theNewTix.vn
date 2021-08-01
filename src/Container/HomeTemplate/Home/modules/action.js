// import axios from "axios";
import * as ActionType from "./constants";
import axios from "../../../AxiosConfig/axiosConfig";

// ** LẤY DANH SÁCH PHIM
export const LayDanhSachPhim = () => {
  return (dispatch) => {
    dispatch(LayDanhSachPhimRequest());
    axios({
      method: "GET",
      url: "/QuanLyPhim/LayDanhSachPhim",
    })
      .then((result) => {
        dispatch(LayDanhSachPhimSuccess(result.data));
      })
      .catch((err) => {
        dispatch(LayDanhSachPhimFailed(err));
      });
  };
};

const LayDanhSachPhimRequest = () => {
  return {
    type: ActionType.LayDanhSachPhimRequest,
  };
};

const LayDanhSachPhimSuccess = (data) => {
  return {
    type: ActionType.LayDanhSachPhimSuccess,
    payload: data,
  };
};
const LayDanhSachPhimFailed = (err) => {
  return {
    type: ActionType.LayDanhSachPhimFailed,
    payload: err,
  };
};

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
    }).then((result) => {
      dispatch(LayThongTinPhimSuccess(result.data));
      return result.data;
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

// ** LẤY THÔNG TIN LỊCH CHIẾU HỆ THỐNG RẠP

export const LayThongTinLichChieuHeThongRap = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "/QuanLyRap/LayThongTinLichChieuHeThongRap",
    }).then((result) => {
      dispatch(LayThongTinLichChieuHeThongRapSuccess(result.data));
      return result.data;
    });
  };
};

const LayThongTinLichChieuHeThongRapSuccess = (data) => {
  return {
    type: ActionType.LayThongTinLichChieuHeThongRapSuccess,
    payload: data,
  };
};

export const DispatchMaHeThongRap = (maHeThongRap) => {
  return {
    type: ActionType.ChonHeThongRap,
    payload: maHeThongRap,
  };
};

export const DispatchMaCumRap = (maCumRap) => {
  return {
    type: ActionType.ChonCumRap,
    payload: maCumRap,
  };
};

export const DispatchMaPhim = (maPhim) => {
  return {
    type: ActionType.ChonPhim,
    payload: maPhim,
  };
};

export const DispatchNgayChieu = (ngayChieu) => {
  return {
    type: ActionType.ChonNgay,
    payload: ngayChieu,
  };
};
