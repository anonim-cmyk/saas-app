import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="images/logo.svg"
            width={46}
            height={46}
            alt="image-logo"
          />
        </div>
      </Link>
      <div className="flex items-center gap-8 cursor-pointer">
        <NavItems />
        <p>SignIn</p>
      </div>
    </nav>
  );
};

export default Navbar;
