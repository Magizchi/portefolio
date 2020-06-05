import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center w-full h-12 border-b-2">
      <div className="container flex justify-around">
        <h1 className="flex items-center text-xl">Rajanan Ganesalingam</h1>
        <div className="flex items-center">
          <p className="mr-4">Acceuil</p>
          <p className="mr-4">Description</p>
          <p className="mr-4">Projet</p>
          <p className="mr-4">Contact</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
