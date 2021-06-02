import React from "react";
import { Grid } from "../component/grid/grid.component";
import { Top } from "../component/header";
import { Main } from "../component/main/main.component";
import { Search } from "../component/search/search.component";

const Home = ({ exercises }) => {
  return (
    <>
    <Top/>
    <Grid>
      {exercises.map((a) => (
        <Main
          key={a.id}
          title={a.name}
          id={a.id}
          description={a.transcript}
          woman={a.female}
          man={a.male}
          areas={a.bodyAreas}
         
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

  return {
    props: data,
  };
};
export default Home;
export { getStaticProps };
