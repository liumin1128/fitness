import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ImgList from "components/ImgListRect";
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

            <Typography className={classes.title} variant="h6" gutterBottom>
              History
            </Typography>
            <Typography variant="body1" gutterBottom>
              You don’t have exercise history yet!
            </Typography>
            <Box height={24} />
            <Typography variant="h6" className={classes.title} gutterBottom>
              Try a new exercise:
            </Typography>
            <ImgList list={list} />
          </Paper>
        </Container>
      </div>
    </>
  );
};
