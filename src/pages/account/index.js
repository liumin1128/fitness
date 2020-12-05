import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import InfoList from "components/InfoList";
import ChipList from "components/ChipList";
import ListSubheader from "@material-ui/core/ListSubheader";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  paper: {
    padding: 16,
    marginBottom: 24,
  },
  container: {
    paddingTop: 16,
  },
  header: {
    display: "flex",
    background: "#1890ff",
    color: "#fff",
    padding: 24,
    paddingTop: 0,
  },
  avatar: {
    marginRight: 24,
    width: 64,
    height: 64,
    border: "2px #fff solid",
  },
  nickname: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flex: 1 }}></div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ShareIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.header}>
          <Avatar
            aria-label="recipe"
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/6PE4NS/aa/71/ca/aa71ca555ef449be897a145029839b9c/images/exercise/u4_div.png?token=ed152cc034e40f541d2cbc62ccc76ed4f3c7ce57c0f92875ac00b6c1e0debc32"
            className={classes.avatar}
          >
            R
          </Avatar>
          <div>
            <Typography className={classes.nickname}>Bob Lee</Typography>
            <Typography variant="body2" className={classes.name}>
              Seattle, WA
            </Typography>
            <Typography variant="caption" className={classes.name}>
              USA
            </Typography>
          </div>
        </div>
        <Container maxWidth="sm" className={classes.container}>
          <Paper elevation={0} style={{ marginBottom: 16 }}>
            {/* <Typography variant="h6" style={{ padding: "16px 16px 0 16px" }}>
              Exercise Data
            </Typography> */}

            <InfoList
              title={"Exercise Data"}
              list={[
                { label: "Total Exercise Time", value: "120 minutes" },
                { label: "Total Sessions", value: "4" },
              ]}
            />
          </Paper>

          <Paper elevation={0} style={{ marginBottom: 16 }}>
            {/* <Typography variant="h6" style={{ padding: "16px 16px 0 16px" }}>
              Health Data
            </Typography> */}

            <InfoList
              title={"Health Data"}
              list={[
                // { label: "Total Exercise Time", value: "120 minutes" },
                // { label: "Total Sessions", value: "4" },
                { label: "Weight", value: "180 lb" },
                { label: "Height", value: "178 cm" },
                { label: "BMI", value: "29.8" },
              ]}
            />
          </Paper>

          <Paper elevation={0}>
            <ListSubheader component="div" id="nested-list-subheader">
              Recommendation
            </ListSubheader>
            <div style={{ padding: "0 16px 16px 16px" }}>
              <ChipList
                list={[
                  // { label: "Total Exercise Time", value: "120 minutes" },
                  // { label: "Total Sessions", value: "4" },
                  {
                    label: "Maintain Body Fat",
                    value: "180 lb",
                    clickable: true,
                  },
                  {
                    label: "Aerobic Exercise",
                    value: "178 cm",
                    clickable: true,
                  },
                  { label: "Eat Green Veggie", value: "29.8", clickable: true },
                ]}
              />
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
};
