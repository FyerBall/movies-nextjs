import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { IMAGE_BASE } from "../../config/constant.js";
import Rating from "./Rating.js";

function MoviePoser({ movies }) {
  return movies.results.map((movie) => {
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
      <div key={id} className="relative ">
        <div className="mx-auto max-w-sm  w-72 shadow-lg">
          <Image
            width={250}
            height={370}
            layout="responsive"
            src={`${IMAGE_BASE}${backdrop_path || poster_path}`}
            alt={title || original_title}
            className=" object-cover"
          />

          <div className="space-y-2 px-6 py-4">
            <p className="uppercase text-sm text-gray-400">
              {release_date} <br />
            </p>
            <h3 className="truncate text-lg font-bold">
              {original_title || title}
            </h3>

            <Rating rate={vote_average} />
          </div>
        </div>
        {/* make the entire div clickable */}
        <Link href={`${id}`}>
          <a className="inset-0 absolute"></a>
        </Link>
      </div>
    );
  });
}
function PeoplePoster({ people }) {
  const { results: data } = people;

  return data
    .map((person) => {
      const { id, name, profile_path: profile } = person;
      return (
        <div key={id} className="relative ">
          <div className="mx-auto max-w-sm  w-72 shadow-lg">
            <Image
              width={250}
              height={370}
              layout="responsive"
              src={`${IMAGE_BASE}${profile}`}
              alt={`${name}'s profile picture`}
              className=" object-cover"
            />

            <div className="space-y-2 px-6 py-4">
              <h3 className="truncate text-lg font-bold">{name}</h3>
            </div>
          </div>
          <Link href={`/person/${id}`}>
            <a className="inset-0 absolute"></a>
          </Link>
        </div>
      );
    })
    .splice(0, 5);
}

function Poster({ movies, people, pageTitle }) {
  return (
    <section className="container pt-12 pb-4 my-11">
      <div className="flex item-center justify-between mb-10">
        <h2 className="normal-case font-bold text-2xl md:text-4xl">
          {pageTitle}
        </h2>
      </div>
      <article className="flex scrollbar-hide w-full gap-20 overflow-auto h-[36rem]">
        {/* {movies ? <MoviePoser /> : "People"} */}
        {movies && <MoviePoser movies={movies} />}
        {people && <PeoplePoster people={people} />}
      </article>
    </section>
  );
}

export default Poster;
