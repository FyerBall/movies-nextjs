/* eslint-disable @next/next/link-passhref */

import NavItems from "./NavItems";
import { useRouter } from "next/router";
import { BiCameraMovie } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";
import { AiTwotoneCalendar, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

function Header({ genres }) {
  const router = useRouter();
  return (
    <nav className="bg-gray-900 text-white py-5 px-2 tracking-widest uppercase overflow-hidden">
      {/* nav links home ...etc */}
      <div className="left flex flex-col items-center justify-between mb-6 py-4 md:flex-row ">
        <Link href="/">
          <p className="text-xl  text-green-600 mb-6 ">Movies</p>
        </Link>
        <ul className="list flex items-center space-x-5 text-xs ">
          <Link href="/">
            <NavItems Icon={AiOutlineHome} title="home" />
          </Link>
          <NavItems Icon={RiMovieLine} title="TV show" />
          <NavItems Icon={BiCameraMovie} title="movies" />
          <NavItems Icon={AiTwotoneCalendar} title="upcoming" />
        </ul>
      </div>

      {/* list of all genres coming from our request */}
      <ul className="m-auto flex overflow-scroll text-sm text-gray-200 max-w-4xl whitespace-nowrap scrollbar-hide space-x-4 md:max-w-full md:justify-center">
        {genres?.genres.map((genre) => (
          <li
            className="cursor-pointer"
            key={genre.id}
            onClick={() => router.push(`/?genres=${genre.id}`)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
