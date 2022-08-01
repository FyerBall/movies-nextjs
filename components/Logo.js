import React from "react";
import Image from "next/image.js";
function Logo() {
  return (
    <div className="flex items-center gap-6 flex-1">
      <Image src="/logo.png" alt="MovieBox Logo" width="50px" height="50px" />
      <p className="text-2xl font-bold text-white">MovieBox</p>
    </div>
  );
}

export default Logo;
