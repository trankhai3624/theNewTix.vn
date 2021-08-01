import { makeStyles } from "@material-ui/core";
import BackApp from "../../Img/MobileApp/backapp.jpg";

const useStyles = makeStyles((theme) => ({
  mobileApp: {
    backgroundImage: `url(${BackApp})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: 640,
    color: "var(--bright-text-color)",
  },
  leftContent: { lineHeight: 1.6 },
  title: { fontSize: 34, fontWeight: 700, margin: "0 0 10px" },
  text: { fontSize: 16, fontWeight: 500, margin: "0 0 10px" },
  button: {
    margin: "0 0 10px",
    borderRadius: 5,
    backgroundColor: "var(--age-tag-c)",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    color: "var(--bright-text-color)",
  },
  link: {
    textDecoration: "none",
    color: "var(--bright-text-color)",
    position: "relative",

    "&::after": {
      content: "''",
      width: "90%",
      height: 1,
      backgroundColor: "var(--first-background-color)",
      position: "absolute",
      bottom: "-10%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  appSlider: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  screen: {
    position: "absolute",
    width: 200,
    height: 425,
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden",
  },
  slider: {
    position: "absolute",
    top: "-17%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 190,
    height: 410,
    borderRadius: 20,
    overflow: "hidden",
  },
  sliderItem: {},
}));

export default useStyles;
