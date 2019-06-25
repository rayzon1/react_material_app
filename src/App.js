import React, { useState } from "react";
import "./App.css";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import MediaCard from "./components/MediaCard";
import PaperSheet from "./components/PaperSheet";
import AlertDialog from "./components/Dialog";
import data from "./data/cardInformation.js";
import { Fade, Flip } from "react-reveal";
import CardNavigation from "./components/CardNavigation";
import sectionBlock from './data/sectionBlockInformation';

const useStyles = makeStyles(({
  root: {
    boxShadow: '5px 10px 8px #888888', 
    maxHeight: '80%', 
    maxWidth: '80%',
    borderRadius: '25px',
    marginLeft: '10%'
  }
}));

function App() {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const setCardsArray = cards => {
    const cardsArray = cards.map(card => (
      <Flip right>
        <MediaCard
          index={card.index}
          title={card.title}
          image={card.image}
          description={card.description}
          key={card.index}
        />
      </Flip>
    ));
    return cardsArray;
  };

  const cards = setCardsArray(data);

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
      <Fade left>
        <Grid item xs={12}>
          {cards.map((card, index) => (index === count ? card : null))}
        </Grid>
      </Fade>
      <Grid item xs={12}>
        <CardNavigation count={count} setCount={setCount} />
      </Grid>
      <Grid item xs={12}>
        {
          sectionBlock.map(data => 
            <PaperSheet
              title={data.title}
              description={data.description}
              id={data.id}
            />
          )
        }
      </Grid>
      <Grid item xs={12}>
        <img src={require('./static/images/brazil-people.jpg')} alt="" className={classes.root} />
      </Grid>
      <AlertDialog />
    </Grid>
  );
}

export default App;
