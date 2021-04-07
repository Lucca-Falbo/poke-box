import "./index.css";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px auto",
    maxWidth: 960,
  },
}));

function CardShower() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}

export default CardShower;
