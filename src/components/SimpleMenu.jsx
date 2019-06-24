import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  links: {
    textDecoration: 'none',
    color: 'black',
  }
});

export default function SimpleMenu(props) {
  const classes = useStyles();

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <Link to="/" className={classes.links}>
          <MenuItem onClick={props.handleClose}>Home</MenuItem>
        </Link>
        <Link to="/about" className={classes.links}>
          <MenuItem onClick={props.handleClose}>About</MenuItem>
        </Link>
        <MenuItem onClick={props.handleClose}>Resources</MenuItem>
      </Menu>
    </div>
  );
}
