import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function About() {
    return (
        <Grid 
            container
            style={{marginTop: "100px"}}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="h2">This is the About page.</Typography>
        </Grid>
        
    )
}