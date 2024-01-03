import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const navLinks = [
    {
      label: "Collections",
      link: "#",
    },
    {
      label: "Mens",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];
  return (
    <main>
        <nav className="flex fixed top-0 left-0 right-0  z-50 bg-slate-900 justify-between px-8 py-6 items-center">
            <div className="flex  items-center gap-8">
                <section className="flex items-center gap-4"> 
                    <FiMenu className="3xl cursor-pointer lg:hidden" onClickk={() => setIsSideMenu(true)} />
                    {/* logo */}
                    <Link className="text-4xl">Logo</Link>
                </section>
                {navLinks.map((navItem) => (
                <Link className="hidden lg:block text-gray-400 hover:text-black " key={navItem.label} href={navItem.link}>
                    {navItem.label}
                </Link>
                ))}
            </div>

            {/* side bar mobile menu */}
            <div className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all ${isSideMenu ? '-translate-x-0' : '-translate-x-full'}`}>
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                <IoCloseSharp className="mt-0 mb-8 text-3xl cursor-pointer" onClick={() => setIsSideMenu(false)} />

                {navLinks.map((navItem) => (
                <Link className="font-bold " key={navItem.label} href={navItem.link}>
                    {navItem.label}
                </Link>
                ))}
            </section>
            </div>

            {/* Last Section */}
            <section className="flex items-center gap-4">
            <GrCart className="text-3xl" />
            </section>
        </nav>
        <hr />
    </main>
  );
};

export default Header;
