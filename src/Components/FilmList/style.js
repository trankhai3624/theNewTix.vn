import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headList: {},
  tabsMenu: {
    fontSize: "1.3rem",
    margin: "1rem",
    transition: "all 0.4s ease",
    lineHeight: "1.3rem",
    height: "1.3rem",
    fontWeight: 400,
    display: "inline-block",
    cursor: "pointer",

    "&:hover": {
      fontSize: "1.5rem",
      color: "var(--highlight-text-color)",
    },
  },
  active: {
    fontSize: "1.5rem",
    color: "var(--highlight-text-color)",
  },
  listContent: { position: "relative" },
  navImg: {
    width: 50,
    height: 50,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  arrowNext: {
    right: "-8.5%",
  },
  arrowBack: {
    left: "-10%",
  },
}));

export default useStyles;
