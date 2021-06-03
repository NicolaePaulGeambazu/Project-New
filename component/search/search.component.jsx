import React, { useState, useEffect } from "react";
import { Grid } from "../grid/grid.component";
import { Button, Input } from "./search.styled";

export const Search = ({ siv, iv }) => {
  const handleInput = (e) => setNewImage(e.target.value);
  const [exercisesListDefault, setExercisesListDefault] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
    );
    const data = response.json();
    setExercisesListDefault(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Grid>
      <Input
        key="random1"
        placehlolder={"search exercises"}
        onChange={(e) => siv(e.target.value)}
        value={iv}
      />
      <Button>Search</Button>
    </Grid>
  );
};
