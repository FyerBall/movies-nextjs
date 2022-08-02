import Link from "next/link";
import Logo from "../Logo.js";
import { navigation } from "../../config/constant.js";

function Header() {
  return (
    <header className="h-20 bg-transparent absolute top-1 z-10 w-full text-white">
      <nav className="container flex items-center pt-4 space-x-7">
        <Logo />

        {navigation.map((nav) => (
          <ul key={nav.id} className="">
            <li
              // checking if link is tagged as primary. if so then apply some additional stylings
              className={`${
                nav.type === "primary" && "bg-rose p-2 rounded"
              } capitalize`}
            >
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
}

export default Header;
