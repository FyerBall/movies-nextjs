import Image from "next/image";
import { SiImdb } from "react-icons/si";
// moving over the results and using splice to only get the first item from each genre to create a big poster
// it might be a good idea to remove the first result from the movie list so you don't have 2 of the same stacking on top of each other
function Banner({ movies }) {
  const IMAGE_BASE = `https://image.tmdb.org/t/p/original/`;
  return (
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
            <div className="bg-blend-darken " key={id}>
              <Image
                src={`${IMAGE_BASE}${backdrop_path || poster_path}`}
                alt={title}
                height={1080}
                width={1920}
                layout="responsive"
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

              <div
                className="
              flex h-full items-start justify-center absolute w-full p-8 text-white tracking-widest top-0  flex-col space-y-5
              "
              >
                <p className="font-thin text-xs -mb-5 ">{release_date}</p>
                <h1 className="uppercase text-2xl md:text-6xl">
                  {original_title || title}
                </h1>
                <span className=" flex items-center">
                  {vote_average} / 10
                  <SiImdb size={25} className="text-yellow-400 mx-4" />{" "}
                </span>
              </div>
            </div>
          );
        })
        .splice(0, 1)}
    </div>
  );
}

export default Banner;
