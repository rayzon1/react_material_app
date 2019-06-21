import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        <MenuItem onClick={props.handleClose}>Profile</MenuItem>
        <MenuItem onClick={props.handleClose}>My account</MenuItem>
        <MenuItem onClick={props.handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}