"use client"
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Link from "next/link";
import BurgerMenu from "../common/BurgerMenu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
    <header className="flex items-center h-16 bg-azul text-white font-roboto">
      <nav className="flex justify-between items-center px-2 w-full">
				<span className="font-monserrat font-bold text-5xl lg:mr-12">Blitz</span>
				<div className={`${isOpen ? 'flex' :'hidden'} z-10 m-0 left-0 flex-col-reverse w-full justify-between absolute top-16 bg-azul lg:z-0 lg:flex lg:flex-row lg:bg-none lg:relative lg:top-0`}>
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-80">
						<Link href={"#"}>Destilados</Link>
						<Link href={"#"}>Vinos</Link>
						<Link href={"#"}>Sin alcohol</Link>
					</div>
					<Searchbar/>
					<div className="flex flex-col text-center lg:flex-row">
						<Link href={"#"} className="border border-white py-2 px-5 rounded-md">Iniciar sesión</Link>
						<Link href={"#"} className="border border-white py-2 px-5 rounded-md">Registrate</Link>
					</div>
				</div>
				<BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen}/>
      </nav>
    </header>
  );
};

export default Navbar;
