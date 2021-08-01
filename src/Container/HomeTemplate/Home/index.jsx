import React, { useEffect } from "react";
import CarouselSlider from "../../../Components/Carousel";
import FilmList from "../../../Components/FilmList";
import FilmSchedule from "../../../Components/FilmSchedule";
import SelectFilm from "../../../Components/FilmSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachPhim,
  LayThongTinLichChieuHeThongRap,
} from "../Home/modules/action";
import MobileApp from "../../../Components/MobileApp";
import Footer from "../../../Components/Footer";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayDanhSachPhim());
    dispatch(LayThongTinLichChieuHeThongRap());
  }, [dispatch]);

  const loading = useSelector((state) => state.HomeReducer.loading);
  if (loading) {
    // return <>loading...</>;
  }
  return (
    <>
      <CarouselSlider />
      <SelectFilm />
      <FilmList />
      <FilmSchedule />
      <MobileApp />
      <Footer />
    </>
  );
}

export default Home;
