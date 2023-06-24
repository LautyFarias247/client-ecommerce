"use client";
import React from "react";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="lg:hidden">
      <button className="w-8 h-10" onClick={()=>setIsOpen(!isOpen)}>
        <span className="block border rounded-md w-full h-1 my-1 bg-white"></span>
        <span className="block border rounded-md w-full h-1 my-1 bg-white"></span>
        <span className="block border rounded-md w-full h-1 my-1 bg-white"></span>
      </button>
    </div>
  );
};

export default BurgerMenu;
