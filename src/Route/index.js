import Home from "../Container/HomeTemplate/Home";
import MovieDtail from "../Container/HomeTemplate/MovieDetail";

export const routeHome = [
  { component: Home, path: "/", exact: true },
  { component: MovieDtail, path: "/movie/:maPhim-:biDanh", exact: true },
];
