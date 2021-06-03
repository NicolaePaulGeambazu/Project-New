import React, { useState } from "react";
import { Grid } from "../component/grid/grid.component";
import { Top } from "../component/header";
import { Main } from "../component/main/main.component";

const Home = ({ exercises }) => {
  const [inputValue, setInputValue] = useState("");
  const [isMale, setIsMale] = useState(true);

  const fillterExercises = exercises.filter((exercise) => {
    return exercise.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
  });
  console.log(fillterExercises);
  console.log(inputValue);
  return (
    <>
      <Top siv={setInputValue} iv={inputValue} im={isMale} sim={setIsMale} />
      <Grid>
        {fillterExercises.map((a) => (
          <Main
            key={a.id}
            title={a.name}
            id={a.id}
            isMale={isMale}
            description={a.transcript}
            woman={a.female}
            man={a.male}
          />
        ))}
      </Grid>
    </>
  );
};

const getStaticProps = async (contex) => {
  const response = await fetch(
    "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
  );
  const data = await response.json();
  console.log(data);
  return {
    props: data,
  };
};
export default Home;
export { getStaticProps };
