import React from "react";
import logo from "../images/Netflix_Logo.png";

const Header = () => {
  return (
    <>
      <div className="px-10 py-2">
        <img
          className="w-52 bg-gradient-to-t from-black h-28"
          src={logo}
          alt="Netflix Logo"
        />
      </div>
    </>
  );
};

export default Header;
