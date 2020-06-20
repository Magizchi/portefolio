import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex justify-center w-full h-16 bg-gray-100 border-b-2 border-purple-700">
      <div className="container flex justify-around lg:justify-between">
        <h1 className="flex items-center text-2xl">
          <span className="hidden font-bold sm:block ">
            Rajanan GANESALINGAM
          </span>
          <span className="block font-bold sm:hidden ">Rajanan G.</span>
        </h1>
        <div className="flex items-center">
          <Link
            smooth={true}
            duration={1000}
            to="presentation"
            className="mr-4 font-bold text-purple-700 border-b-2 border-transparent hover:border-purple-700"
          >
            Accueil
          </Link>
          <Link
            smooth={true}
            duration={1000}
            to="project"
            className="mr-4 font-bold text-purple-700 border-b-2 border-transparent hover:border-purple-700"
          >
            Projets
          </Link>
          <Link
            smooth={true}
            duration={1000}
            to="contact"
            className="mr-4 font-bold text-purple-700 border-b-2 border-transparent hover:border-purple-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
