import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className={`
    flex
    h-16
    w-full
    items-center
    justify-between
    bg-white
    px-4
    shadow-sm
    `}
    >
      <Link href={"/"} className="">
        <Image
          src="/assets/DocTalker.svg"
          width={100}
          height={100}
          alt="logo"
          className="h-32 w-32"
        ></Image>
      </Link>

      {/* TODO: Handle open/close Menu */}
      <AiOutlineMenu className="cursor-pointer text-2xl text-black" />
    </nav>
  );
};
export default Navbar;
