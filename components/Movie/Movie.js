import Image from "next/image";
import { useEffect } from "react";

function Movie({ movies }) {
  return (
    <div className="bg-gray-900 flex flex-wrap justify-center">
      {/* {movies.results.map((movie) => {
        // getting what we might need from the result to display on the screen
        const {
          backdrop_path,
          poster_path,
          original_title,
          title,
          release_date,
          vote_average,
          id,
        } = movie;

        // this should be a reusable comp.
        return (
          <div key={id} className="flex flex-wrap cursor-pointer ">
            <div className="mx-auto max-w-sm  w-72 h-full">
              <div className="card flex flex-col justify-center  m-4  rounded-lg shadow-2xl">
                <div className="">
                  <Image
                    width={320}
                    height={380}
                    layout="responsive"
                    src={`${IMAGE_BASE}${backdrop_path || poster_path}`}
                    alt={title || original_title}
                    className=" object-cover rounded-lg"
                  />
                </div>
                <div className="py-3">
                  <p className="text-lg uppercase text-white font-bold">
                    {original_title || title}
                  </p>
                  <p className="uppercase text-sm text-gray-400 mb-4 ">
                    {release_date} <br />{" "}
                    <span className="font-thin">{vote_average}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Movie;
