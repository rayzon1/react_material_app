import React from 'react';
import {makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
      height: '50px', 
      width: '65px',
      marginLeft: '10px',
    },
    foot: {
        width: '100%', 
        position: 'relative',
        bottom: '0',
        marginTop: '10%',
        marginLeft: '1%'
    }
    
  })
export default function Footer() {
    const classes = useStyles();
    return (
        
        <Grid item xs={12} className={classes.foot}>
            &copy; Gfunk 2019 
            <img src={require('../static/icons/Octocat.jpg')} alt="" className={classes.footer}/>
        </Grid>

        
    )

}