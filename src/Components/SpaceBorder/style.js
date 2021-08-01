import { makeStyles } from "@material-ui/styles";
import Clouds from "../../Img/Border/Clouds.jpg";
const useStyles = makeStyles((theme) => ({
  spaceBorder: {
    backgroundImage: `url(${Clouds})`,
    width: "100%",
    height: 120,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default useStyles;
