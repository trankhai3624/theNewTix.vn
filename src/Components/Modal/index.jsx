import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
export default function TransitionsModal({ trailer }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="trailerModal">
      <PlayCircleOutlineIcon
        onClick={handleOpen}
        className={classes.playIcon}
      />
      <Modal
        aria-labelledby="Trailer"
        aria-describedby="Trailer"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <iframe
            width="1024"
            height="576"
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            autoPlay={1}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Fade>
      </Modal>
    </div>
  );
}
