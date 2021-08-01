import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filmSchedule: {
    height: 705,
    border: "1px solid var(--border-color)",
    display: "flex",
    marginBottom: "40px !important",
  },
  border: {
    borderRight: "1px solid var(--border-color)",
    borderLeft: "1px solid var(--border-color)",
  },
  headCinema: {
    width: 90,
    height: "100%",
  },
  subCinema: {
    width: 285,
    height: "100%",
  },
  showTime: {
    width: 565,
    height: "100%",
    padding: 5,
  },
}));

export default useStyles;
