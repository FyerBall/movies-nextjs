import React from "react";
import Image from "next/image.js";
import Link from "next/link.js";
function Logo() {
  return (
    <div className="flex relative items-center gap-6 flex-1">
      {/* LOGO */}
      <Link href="/">
        <a className="text-2xl font-bold text-white">MovieBox</a>
      </Link>
    </div>
  );
}

export default Logo;
