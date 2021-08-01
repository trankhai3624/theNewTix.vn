import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  borderPosition: {
    position: "relative",
    width: "100%",
    height: 85,
  },
  selectFilmBorder: {
    height: 85,
    borderRadius: 5,
    boxShadow: "0 2px 10px var(--second-background-color)",
    backgroundColor: "var(--first-background-color)",

    left: "50%",
    transform: "translateX(-50%)",
    bottom: "55%",
    position: "absolute",
  },

  position: {},
  formControl: {
    backgroundColor: "transparent",
  },

  filmSelect: {},
  cinemaSelect: {},
  daySelect: {},
  timeSelect: {},
  submit: {},
  submitButton: {
    backgroundColor: "var(--second-background-color)",
    color: "var(--bright-text-color)",
    "&:hover": {
      backgroundColor: "var(--second-background-color)",
    },
  },
  border: {},
  root: {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      borderBottom: "none",
    },
    "&:hover:before": {
      borderBottom: "none",
    },
    "&::before": {
      borderBottom: "none",
      transition: "none",
    },
  },
}));

export default useStyle;
