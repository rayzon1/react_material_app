import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { FreeBreakfastTwoTone } from "@material-ui/icons";
import {Fade} from 'react-reveal';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "90vw",
    backgroundColor: 'rgba(165, 112, 54, 0.1)'
  }
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  
  return (
    <div>
      <Paper className={classes.root}>
        <Fade right>
          <Typography variant="h5" component="h3">
            <span className="coffee">{props.title}</span>
            {
              props.id === 0 
                ? <FreeBreakfastTwoTone />
                : null
            }
          </Typography>
        
          <Typography component="p">
            {props.description}
          </Typography>
        </Fade>
      </Paper>
    </div>
  );
}
