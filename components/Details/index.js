import React from "react";
import Rating from "../Movie/Rating.js";
import Trailer from "../Trailer.js";

function Details({ movie }) {
  return (
    <>
      {movie.map((m) => {
        const { id, title, vote_average, release_date, overview } = m;
        return (
          <div
            className="space-y-2 flex px-6 py-4 flex-col items-center mx-auto text-center lg:w-1/2 "
            key={id}
          >
            <div className="flex items-center space-x-2">
              <h3 className="truncate text-lg font-bold">{title} </h3>
              <span className="uppercase text-sm text-gray-400">
                {" "}
                {release_date}
              </span>
            </div>
            <p>{overview}</p>
            <Rating rate={vote_average} />
            <Trailer id={id} />
          </div>
        );
      })}
    </>
  );
}

export default Details;
