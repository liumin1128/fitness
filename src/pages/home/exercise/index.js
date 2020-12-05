import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ImgList from "components/ImgList";
import Logo from "components/Logo";
import list from "./data";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  paper: {
    padding: 16,
  },
  container: {
    paddingTop: 16,
  },
  title: {
    fontWeight: "bold",
  },
});

export default () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
          <Paper elevation={0} className={classes.paper}>
            <Logo />
            <br />
            <Typography className={classes.title} variant="h6">
              Choose a workout
            </Typography>
            <br />
            <ImgList list={list} />
          </Paper>
        </Container>
      </div>
    </>
  );
};
