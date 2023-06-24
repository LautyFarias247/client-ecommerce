import React from "react";
import { Search } from "react-feather";

const Searchbar = () => {
  return (
    <div className="hidden lg:flex lg:items-center">
      <input className="" type="text" />
      <button className="bg-white">
        <Search color="#004080" className="bg-white" />
      </button>
    </div>
  );
};

export default Searchbar;
