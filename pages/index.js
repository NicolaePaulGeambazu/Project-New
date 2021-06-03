import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "../component/grid/grid.component";
import { Top } from "../component/header";
import { Main } from "../component/main/main.component";
import { Search } from "../component/search";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Home = ({ exercises }) => {
  const [inputValue, setInputValue] = useState();

  console.log(inputValue);
  return (
    <>
      <Top siv={setInputValue} iv={inputValue} />
      <Grid>
        {exercises.map((a) => (
          <Main
            key={a.id}
            title={a.name}
            id={a.id}
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
