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
        <img
          className={classes.logo}
          src="https://d1icd6shlvmxi6.cloudfront.net/gsc/6PE4NS/aa/71/ca/aa71ca555ef449be897a145029839b9c/images/exercise/u1.png?token=fd540c24b304a42b7b4d923c2db5a8a13187ef23568bcc0b4116a489e243809a"
        />
      </div>
      <Typography className={classes.title} variant="h6">
        Home Exercise
      </Typography>
    </div>
  );
};
