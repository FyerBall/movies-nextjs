import React from "react";
import Image from "next/image.js";
import Link from "next/link.js";
function Logo() {
  return (
    <div className="flex relative items-center gap-6 flex-1">
      <Link href="/">
        <a>
          <Image
            src="/Logo.png"
            alt="MovieBox Logo"
            width="186px"
            height="50px"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
