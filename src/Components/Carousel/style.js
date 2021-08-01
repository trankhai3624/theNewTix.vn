import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  carouselItem: {
    height: 600,
    cursor: "pointer",

    "&:hover $hoverOverlay": {
      visibility: "visible",
      opacity: 1,
    },
  },
  carouselImg: {
    width: "100%",
    height: 600,
  },
  navImg: {
    width: 20,
    height: 20,
  },
  hoverOverlay: {
    transition: "all 0.4s",
    width: "100%",
    height: "100%",
    // zIndex: 1,
    position: "absolute",
    top: 0,
    backgroundImage: "linear-gradient(transparent,black)",
    visibility: "hidden",
    opacity: 0,
  },
}));

export default useStyles;
