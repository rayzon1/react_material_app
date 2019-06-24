import React from "react";
import { Box, Button } from '@material-ui/core'
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";
import data from "../data/cardInformation.js";

export default function CardNavigation(props) {
    const { count, setCount } = props;
  return (
    <Box>
      <Button onClick={() => (count === 0 ? null : setCount(props.count - 1))}>
        <ChevronLeftRounded fontSize="large" />
      </Button>
      <Button
        onClick={() => (count === data.length - 1 ? null : setCount(count + 1))}
      >
        <ChevronRightRounded fontSize="large" />
      </Button>
    </Box>
  );
}
