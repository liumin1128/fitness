import React, { Component } from "react";
import { parse } from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ImgList from "components/ImgList";
import Appbar from "components/Appbar";
import { getData } from "./data";

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
  iframe: {
    width: "100%",
    height: 0,
    paddingTop: "56%",
    position: "relative",
    "& > iframe": {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      margin: 0,
      border: "none",
    },
  },
});

export default () => {
  const classes = useStyles();
  const location = useLocation();
  const { id } = parse(location.search) || {};
  const data = getData(id);

  return (
    <>
      <div className={classes.root}>
        <Appbar title="" />
        <Container maxWidth="sm" className={classes.container}>
          <Paper elevation={0}>
            <div className={classes.paper}>
              <Typography className={classes.title} variant="h6">
                {data.title}
              </Typography>
            </div>

            <div className={classes.iframe}>
              <iframe src={data.iframe}></iframe>
            </div>

            <div className={classes.paper}>
              <Typography
                gutterBottom
                className={classes.title}
                variant="body1"
              >
                Session Intro
              </Typography>
              {(data.content || []).map((i) => {
                return (
                  <Typography key={i} variant="body1" gutterBottom>
                    {i}
                  </Typography>
                );
              })}
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
};
