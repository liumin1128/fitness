import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    left: "-25%",
    top: "-25%",
    width: "150%",
    height: "150%",
  },
  logoBox: {
    position: "relative",
    width: 48,
    height: 48,
    marginRight: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ({ list = [] }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.logoBox}>
        <img className={classes.logo} src="/images/logo_small.png" />
      </div>
    </div>
  );
};
