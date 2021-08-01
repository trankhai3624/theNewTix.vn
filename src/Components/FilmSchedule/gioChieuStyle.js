import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gioChieuContainer: {
    display: "flex",
    padding: 10,
    width: "100%",
    flexWrap: "wrap",
  },
  gioChieuItem: {
    margin: "10px 20px",
    display: "block",
    width: 85,
    // height: 40,
    borderRadius: 5,
    border: "1px solid var(--border-color)",
    backgroundColor: "#fafafa",
    textAlign: "center",
    padding: "15px 0",
    cursor: "pointer",
    color: "#108f3e",
    fontWeight: 600,
    fontSize: 18,
    transition: "all .4s",
    "&:hover": {
      color: "var(--highlight-text-color)",
    },
  },
}));

export default useStyles;
