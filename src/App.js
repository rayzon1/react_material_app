import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Typography, Grid } from "@material-ui/core";
import MediaCard from "./components/MediaCard";
import PaperSheet from "./components/PaperSheet";
import AlertDialog from "./components/Dialog";
import data from "./data/cardInformation.js";
import {Fade} from 'react-reveal';
import CardNavigation from './components/CardNavigation';

function App() {
  const [count, setCount] = useState(0);
  // const [cardSet, setCard] = useState([]);
  
  // useEffect(() => {
    
    
  // })

  
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} />
      <Grid item xs={12}>
        <Typography variant="h2" component="h2">
          Rainforest Conservation
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          index={data[count].index}
          title={data[count].title}
          image={data[count].image}
          description={data[count].description}
        />
      </Grid>
      <CardNavigation 
        count={count}
        setCount={setCount}
      />
      <Grid item xs={12}>
        <Fade left>
          <PaperSheet />
        </Fade>
      </Grid>
      <AlertDialog />
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Click Me!
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
