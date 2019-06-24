import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Dialog from "./Dialog";


const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    
    <Card className={classes.card}>
      <Dialog open={open} handleClose={handleClose} image={props.image} />
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
