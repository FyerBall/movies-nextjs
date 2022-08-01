import Link from "next/link.js";
import React from "react";

function Footer() {
  return (
    <div className="py-10 text-center bg-rose text-white">
      <p>
        MovieBox by{" "}
        <Link href="https://www.figma.com/@radenadri">
          <a target="_blank" rel="noopener noreferrer" className="underline">
            Adriana Eka Prayudha
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
