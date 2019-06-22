import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function SimpleMenu(props) {

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <Link to="/"><MenuItem onClick={props.handleClose}>Home</MenuItem></Link>
        <Link to="/about"><MenuItem onClick={props.handleClose}>About</MenuItem></Link>
        <MenuItem onClick={props.handleClose}>Resources</MenuItem>
      </Menu>

    </div>
  );
}