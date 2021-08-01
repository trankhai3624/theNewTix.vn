import { makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  headCinemaLogo: {
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",

    "&::after": {
      content: '""',
      width: 50,
      height: 1,
      backgroundColor: "var(--border-color)",
      position: "absolute",
      bottom: 0,
    },
    "&:hover": {
      opacity: 1,
    },
  },
  logoImg: {
    width: 50,
    height: 50,
  },
  disabled: {
    opacity: 0.5,
    transition: "all 0.4s",
  },
  actived: {
    opacity: 1,
    transition: "all 0.4s",
  },
}));

export default usestyles;
