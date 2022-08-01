import React from "react";
import { useRouter } from "next/router";
import Details from "../components/Details/index.js";

function DetailsPageTemplate({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const findMovie = data.filter((movie) => movie.id == slug);

  return <Details movie={findMovie} />;
}

export default DetailsPageTemplate;
