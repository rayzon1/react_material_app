import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { FreeBreakfastTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "90vw"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          <span className="coffee">BRAZIL COFFEE</span>
          <FreeBreakfastTwoTone />
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application. Paper can be used to build surface or other elements for
          your application. Paper can be used to build surface or other elements
          for your application. Paper can be used to build surface or other
          elements for your application. Paper can be used to build surface or
          other elements for your application. Paper can be used to build
          surface or other elements for your application. Paper can be used to
          build surface or other elements for your application. Paper can be
          used to build surface or other elements for your application. Paper
          can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}
