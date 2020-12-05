import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  item: {},
});

export default ({ list = [] }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.root} spacing={2}>
      {list.map((i) => {
        return (
          <Grid
            item
            xs={6}
            key={i.src}
            onClick={() => {
              history.push(i.link);
            }}
          >
            <CardMedia
              className={classes.media}
              image={i.src}
              title={i.title}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
