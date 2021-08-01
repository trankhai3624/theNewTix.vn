import React from "react";
import useStyles from "./style";
function SpaceBorder() {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.spaceBorder}></div>
    </div>
  );
}

export default SpaceBorder;
