import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LogoSmall from "components/Logo/Small";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 9,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export default function ButtonAppBar({ title }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <span
              onClick={() => {
                history.push("/");
              }}
            >
              <LogoSmall />
            </span>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ height: 58 }}> </div>
    </>
  );
}
