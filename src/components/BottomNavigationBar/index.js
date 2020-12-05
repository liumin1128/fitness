import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useLocation, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    bottom: 0,
    width: "100%",
  },
});

export default function LabelBottomNavigation() {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0, left: 0 }}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="Exercise"
          value="/home/exercise"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="History"
          value="/home/history"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="/home/account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}
