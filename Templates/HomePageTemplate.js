import React from "react";
import Hero from "../components/Hero/Hero.js";
import Poster from "../components/Movie/Poster.js";

function HomePageTemplate({ ...props }) {
  const { movies, upcoming, people } = props;

  return (
    <>
      <Hero movies={movies} />
      <Poster movies={movies} pageTitle="Featured Movies" />
      <Poster movies={upcoming} pageTitle="New Arrival" />
      <Poster people={people} pageTitle="Featured Casts" />
    </>
  );
}

export default HomePageTemplate;
