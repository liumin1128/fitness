import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "#eee",
  },
  item: {
    position: "relative",
    // border: "1px red solid",
  },
  title: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "8px 16px",
    color: "#fff",
  },
});

export default ({ list = [] }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container className={classes.root} spacing={2}>
      {list.map((i, index) => {
        return (
          <Grid
            item
            xs={12}
            md={6}
            key={i.src + " " + index}
            onClick={() => {
              history.push(i.link);
            }}
          >
            {/* {i.src && ( */}
            <div className={classes.item}>
              <CardMedia
                className={classes.media}
                image={i.src}
                title={i.title}
              />
              {/* )} */}
              <Typography className={classes.title}>{i.title}</Typography>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};
