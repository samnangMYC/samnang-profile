"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact Me ",
    path: "#projects",
  },
];

const Navbar = () => {
  return (
    <nav className="py-8  top-0 left-0 right-0">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <Link href={"/"} className="text-3xl lg:text-5xl ">
          KSN
        </Link>
        <div className="hidden lg:block ">
          <ul className="flex flex-row  justify-between md:gap-16 md:w-auto">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
