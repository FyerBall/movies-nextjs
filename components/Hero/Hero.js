import Image from "next/image";
import Link from "next/link.js";
import { IMAGE_BASE } from "../../config/constant.js";
import Rating from "../Movie/Rating.js";
import Header from "../Nav/index.js";
import Trailer from "../Trailer.js";
function Hero({ movies }) {
  return (
    <>
      <Header />
      <div className="relative h-full ">
        {movies.results
          .map((movie) => {
            const {
              backdrop_path,
              poster_path,
              original_title,
              title,
              overview,
              release_date,
              vote_average,
              id,
            } = movie;

            return (
              <div className="bg-blend-darken" key={id}>
                <div className="relative h-screen">
                  <Image
                    src={`${IMAGE_BASE}${backdrop_path || poster_path}`}
                    alt={title}
                    layout="fill"
                    className="absolute inset-0 h-full w-full object-contain"
                    priority
                    objectFit="cover"
                  />
                </div>
                {/* overlay */}
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
                <div className="container ">
                  <div className="flex h-full items-start justify-center absolute lg:w-1/3 text-white tracking-widest top-0 flex-col space-y-5 shadow">
                    <p className="font-thin text-xs -mb-5">{release_date}</p>
                    <h1 className="uppercase text-2xl md:text-6xl">
                      {original_title || title}
                    </h1>
                    <Rating rate={vote_average} variant="light" />
                    <p className="">{overview}</p>

                    <Trailer id={id} name={title} />
                  </div>
                </div>
              </div>
            );
          })
          .splice(0, 1)}
      </div>
    </>
  );
}

export default Hero;
