import * as ActionType from "./constants";

const initialState = {
  loading: false,
  err: null,
  movieDetail: [],

  schedule: [],
  cumRapList: [],
  filmList: [],
  ngayList: [],
  gioList: [],

  heThongRap: "BHDStar",
  cumRap: "",
  chonPhim: "",
  chonNgay: "",
  chonGio: "",
};

const HomeAction = (state = initialState, { type, payload }) => {
  switch (type) {
    // ** LẤY THÔNG TIN PHIM
    case ActionType.LayThongTinPhimRequest:
      state.movieDetail = [];
      state.loading = true;
      return { ...state };
    case ActionType.LayThongTinPhimSuccess:
      state.loading = false;
      state.movieDetail = payload;
      return { ...state };
    case ActionType.LayThongTinPhimFailed:
      state.loading = false;
      state.err = payload;
      return { ...state };

    // ** LẤY THÔNG TIN LỊCH CHIẾU HỆ THỐNG RẠP
    case ActionType.LayThongTinLichChieuHeThongRapSuccess:
      //  SCHEDULE DATA RECEIVE
      state.schedule = payload;

      //  SET 1ST MACUMRAP
      state.cumRap = payload
        .filter((item) => item.maHeThongRap === state.heThongRap)
        .map((item) => item.lstCumRap)[0][0].maCumRap;

      //  FILTER 1ST CUM RAP
      state.cumRapList = payload.filter(
        (item) => item.maHeThongRap === state.heThongRap
      )[0].lstCumRap;
      state.cumRapList.length = 10;

      // SET FILM LIST
      state.filmList = state.cumRapList[0].danhSachPhim;
      state.filmList.length = 10;
      return { ...state };
    // CHỌN HỆ THỐNG RẠP
    case ActionType.ChonHeThongRap:
      state.heThongRap = payload;

      state.cumRap = state.schedule
        .filter((item) => item.maHeThongRap === payload)
        .map((item) => item.lstCumRap)[0][0].maCumRap;

      state.cumRapList = state.schedule.filter(
        (item) => item.maHeThongRap === payload
      )[0].lstCumRap;
      state.cumRapList.length = 10;

      state.filmList = state.cumRapList[0].danhSachPhim;
      state.filmList.length = 10;

      state.chonPhim = "";

      return { ...state };
    // CHỌN CỤM RẠP
    case ActionType.ChonCumRap:
      state.cumRap = payload;
      state.filmList = state.cumRapList.filter(
        (item) => item.maCumRap === payload
      )[0].danhSachPhim;
      state.filmList.length = 10;
      state.chonPhim = "";

      return { ...state };
    //  CHỌN PHIM
    case ActionType.ChonPhim:
      state.chonPhim = payload;
      state.ngayList = [
        ...new Set(
          state.filmList
            .filter((item) => item.maPhim === payload)[0]
            .lstLichChieuTheoPhim.map((item) =>
              item.ngayChieuGioChieu.slice(0, 10)
            )
        ),
      ];
      state.ngayList.length = 3;
      state.chonNgay = "";
      return { ...state };
    // CHỌN NGÀY
    case ActionType.ChonNgay:
      state.chonNgay = payload;
      state.gioList = state.filmList
        .filter((item) => item.maPhim === state.chonPhim)[0]
        .lstLichChieuTheoPhim.filter((item) =>
          item.ngayChieuGioChieu.includes(payload)
        );

      return { ...state };

    default:
      return state;
  }
};

export default HomeAction;
