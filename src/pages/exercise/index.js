import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ImgList from "components/ImgList";
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
});

export default () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Choose a workout
            </Typography>
            <ImgList list={list} />
          </Paper>
        </Container>
      </div>
    </>
  );
};
