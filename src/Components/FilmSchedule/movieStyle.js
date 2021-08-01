import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filmContainer: {
    position: "relative",
    "&::after": {
      content: '""',
      width: "80%",
      height: 1,
      backgroundColor: "var(--border-color)",
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  filmTag: {
    display: "flex",
    marginBottom: 10,
    paddingRight: 10,
    width: "100%",

    alignItems: "center",
    cursor: "pointer",
    height: 120,
    position: "relative",
  },
  filmImg: {
    width: 50,
    borderRadius: "5px",
    // height: 75,
    // boxShadow
  },
  filmName: {
    marginLeft: 10,
  },
  expand: {
    marginLeft: "auto",
    right: 0,
  },
  display: {
    opacity: 1,
    visibility: "visible",
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
  },
}));

export default useStyles;
