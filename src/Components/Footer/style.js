import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "var(--footer-background-color)",
    padding: "25px 0",
  },
  topContent: {
    borderBottom: "1px solid var(--second-text-color)",
  },
  title: {
    color: "var(--bright-text-color)",
    marginBottom: 15,
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  contentItem: {
    display: "block",
    width: "45%",
    textDecoration: "none",
    color: "var(--footer-second-text-color)",
    fontWeight: 600,
    fontSize: 16,
    transition: "all .4s",
    margin: "10px 0",

    "&:hover": {
      color: "var(--bright-text-color)",
    },
  },
  customerImg: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: "50%",
  },
  appMobile: { textAlign: "center" },
  appItem: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  botContent: {
    marginTop: 25,
  },
  gridItem: {
    // width: "100%",
  },
  infoLogoLeft: {
    width: 80,
    borderRadius: 10,
  },
  infoCenter: {
    paddingLeft: "30px !important",
    lineHeight: 1.6,
  },
  infoLogoRight: {
    width: 135,
  },
  infoText: { color: "var(--footer-second-text-color)" },
  email: { textDecoration: "none", color: "var(--highlight-text-color)" },
}));

export default useStyles;
