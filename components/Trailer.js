import Link from "next/link.js";
import React, { useEffect, useState } from "react";

function Trailer({ id }) {
  const [trailerId, setTrailerId] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
      );
      const response = await data.json();

      const findTrailer = await response.results.filter(
        (type) => type.type.toLowerCase() === "trailer"
      );
      setTrailerId(findTrailer[0].key);
    }
    fetchMovies();
  }, [id]);
  return (
    <Link href={`https://www.youtube.com/watch?v=${trailerId}`} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="bg-rose p-2 rounded flex justify-center items-center text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
        Watch Trailer
      </a>
    </Link>
  );
}

export default Trailer;
