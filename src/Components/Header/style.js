import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 500,
    fontSize: 16,
    height: 60,
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    letterSpacing: 1,
  },
  headerLogo: { marginLeft: "30px", display: "block", marginRight: 530 },
  headerLogoImg: {
    width: "50px",
    height: "50px",
  },
  headerMenu: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    listStyle: "none",
  },
  headerMenuItem: {
    marginRight: 25,
  },
  headerMenuLink: {
    textDecoration: "none",
    color: "var(--first-text-color)",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "var(--highlight-text-color)",
    },
  },
  headerUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "auto",
    textDecoration: "none",
    color: "var(--disable-text-color)",
    marginRight: 20,
    fontWeight: 400,
  },
  headerUserAvata: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    marginRight: 10,
  },
  headerUserText: {},
}));

export default useStyles;
