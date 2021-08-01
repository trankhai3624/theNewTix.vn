import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filmCard: {
    height: 400,
    width: 215,
    borderRadius: 5,
    overflow: "hidden",
    cursor: "pointer",
    marginBottom: "2rem",
    "&:hover $hoverOverlay": {
      visibility: "visible",
      opacity: 1,
    },
  },
  filmPoster: {
    borderRadius: 5,
    overflow: "hidden",
    height: 315,
    width: 215,
    position: "relative",
    transition: "all 0.4s",
  },
  hoverOverlay: {
    transition: "all 0.4s",
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    top: 0,
    backgroundImage: "linear-gradient(transparent,black)",
    visibility: "hidden",
    opacity: 0,

    //   transition: all 0.4s;
    // width: 100%;
    // height: 100%;
    // z-index: 1;
    // position: absolute;
    // top: 0;
    // background-image: linear-gradient(transparent, black);
    // visibility: hidden;
    // opacity: 0;
  },
  posterImg: {
    borderRadius: 5,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  filmInfo: {
    marginTop: 10,
  },
  infoTop: {
    justifyContent: "flex-start",
    height: 45,
    alignItems: "flex-start",
  },
  ageTag: {
    marginRight: 10,
    marginTop: 2,

    width: 30,
    height: 20,
    textAlign: "center",
    backgroundColor: "var(--age-tag-p)",
    borderRadius: 5,
    color: "var(--bright-text-color)",
    fontWeight: 500,
    lineHeight: "20px",
  },
  filmName: {
    fontSize: 16,
    fontWeight: 500,
    width: 170,

    color: "var(--first-text-color)",
  },
  infoBot: {
    marginTop: 10,
    height: 20,
  },
}));

export default useStyles;
