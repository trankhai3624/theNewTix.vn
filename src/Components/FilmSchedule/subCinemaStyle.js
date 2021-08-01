import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  subCinema: {
    display: "flex",
    height: 120,
    position: "relative",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",

    "&::after": {
      content: '""',
      width: "80%",
      height: 1,
      backgroundColor: "var(--border-color)",
      position: "absolute",
      bottom: 0,
    },
    "&:hover": {
      opacity: 1,
    },
  },
  subLogo: { width: 50, height: 50 },
  subInfo: {
    fontSize: 16,
    width: 180,
  },
  subName: {
    display: "block",
    color: "var(--first-text-color)",
  },
  subAddress: {
    display: "block",
    color: "var(--third-text-color)",
    margin: "4px 0",
  },
  detailInfo: { display: "block", color: "var(--highlight-text-color)" },
  actived: { opacity: 1, transition: "all 0.4s" },
  disabled: { opacity: 0.5, transition: "all 0.4s" },
}));

export default useStyles;
