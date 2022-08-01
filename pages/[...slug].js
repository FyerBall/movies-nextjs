import React from "react";
import DetailsPageTemplate from "../Templates/DetailsPageTemplate.js";
import server from "../utils/server.js";
import { fetchMovies } from "./index.js";

function DetailPage({ movies, ...props }) {
  const { results: data } = movies;

  return <DetailsPageTemplate data={data} {...props} />;
}

export default DetailPage;

export const getServerSideProps = async () => {
  const movies = await fetchMovies();

  return {
    props: {
      movies,
    },
  };
};
