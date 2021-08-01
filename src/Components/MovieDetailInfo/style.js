import { makeStyles } from "@material-ui/core";
import Background from "../../Img/MovieDetail/bg.png";
const useStyles = makeStyles((theme) => ({
  movieDetail: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  topContent: {
    height: 600,
    display: "flex",
    alignItems: "center",
    color: "var(--bright-text-color)",
    fontWeight: 600,
    lineHeight: 1.6,
  },
  movieImg: {
    width: 220,
    height: 320,
  },
  movieInfo: {
    marginLeft: 15,
  },
  infoTitle: {
    fontSize: "1.5rem",
    letterSpacing: 1,
  },
  ageTag: {},
  botContent: {
    height: 400,
  },
  rating: {
    width: 130,
    height: 130,
    marginLeft: "auto",
  },
}));

export default useStyles;
