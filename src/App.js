import React, { useState } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/AppBar';
import MediaCard from './components/MediaCard';
import PaperSheet from './components/PaperSheet';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import data from './data/cardInformation.js';

function App() {

  const [count, setCount] = useState(0);

  return (
    <Grid 
      container 
      spacing={10}
      direction="column"
      justify="center"
      alignItems="center"
      >
      <Grid item xs={12}>
        <SearchAppBar/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" >Brazil</Typography>
      </Grid>
      
      <Grid item xs={12} sm={3}>
        <MediaCard
          index={data[count].index}
          title={data[count].title}
          image={data[count].image}
          description={data[count].description}
         />
      </Grid>
      <Box>
        <Button onClick={() => count === 0 ? null : setCount(count - 1)}>
          <ChevronLeftRounded fontSize="large"/>
        </Button>
        <Button onClick={() => count === data.length - 1 ? null : setCount(count + 1)}>
          <ChevronRightRounded fontSize="large"/>
        </Button>
      </Box>
    
      <Grid item xs={12} >
        <PaperSheet />
      </Grid>
     
      <Grid item xs={12} >
        <Button variant="contained" color="primary">Click Me!</Button>
      </Grid>
    </Grid>
  );
}

export default App;
