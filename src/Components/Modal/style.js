import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  playIcon: {
    // width: "50vh",
    // height: "50px",
    // fontSize: "100%",
    // width: "50%",
    fontSize: "3.5rem",
    color: "var(--bright-text-color)",
    transition: "all 0.4s",
    "&:hover": {
      color: "var(--disable-text-color)",
    },
  },
}));
export default useStyles;
