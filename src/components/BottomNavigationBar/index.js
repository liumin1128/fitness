import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
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
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Exercise"
        value="/exercise"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="History"
        value="/history"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Account"
        value="/account"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
