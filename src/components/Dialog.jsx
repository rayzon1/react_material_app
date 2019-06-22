import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ErrorOutlineTwoTone } from '@material-ui/icons';

export default function AlertDialog(props) {
  const { open, handleClose, image } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">{"Help the Rainforest?"}<ErrorOutlineTwoTone className="error-symbol" /></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            With just a few dollars, you too can help these amazing animals!
          </DialogContentText>
          <img src={image} alt="card" style={{maxHeight: '100%', maxWidth: '100%'}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Go Back
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Donate
          </Button>
        </DialogActions>
          
      </Dialog>
    </div>
    
  );
}