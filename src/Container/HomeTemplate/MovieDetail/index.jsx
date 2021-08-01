import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LayThongTinPhim } from "./modules/action";
import MovieDetailInfo from "../../../Components/MovieDetailInfo/index";
function MovieDtail() {
  const dispatch = useDispatch();
  const maPhimUrl = useParams();

  useEffect(() => {
    dispatch(LayThongTinPhim(maPhimUrl.maPhim));
  }, []);
  const movieDetailGlobal = useSelector(
    (state) => state.MovieDetailReducer.movieDetail
  );
  const loading = useSelector((state) => state.MovieDetailReducer.loading);

  if (loading) {
    return <>loading...</>;
  }
  return (
    <div>
      <MovieDetailInfo movieDetail={movieDetailGlobal} />
    </div>
  );
}

export default MovieDtail;
