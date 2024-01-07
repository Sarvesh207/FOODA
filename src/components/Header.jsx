import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { Company_LOGO } from "../constant";
import { IoSearch } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";

const Header = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const navLinks = [
    {
      label: "Search",
      link: "#",
      icons:IoSearch,

    },
    {
      label: "Offer",
      link: "#",
      icons:BiSolidOffer,
    },
    {
      label: "Help",
      link: "#",
      icons:IoIosHelpCircleOutline
    },
    
  ];

  

  return (
    <main>
        <nav className="flex fixed top-0 left-0 right-0  z-50 bg-white justify-between px-8 py-6 items-center">
            <div className="flex items-center justify-between gap-10">
                <section className="flex items-center gap-8"> 
                    <FiMenu className="3xl cursor-pointer lg:hidden" onClick={() => setIsSideMenu(true)} />
                    {/* logo */}
                    <Link className="text-3xl ">
                      <img src={Company_LOGO} alt="CompanyLogo" className="w-24 bg-[#fc8019]" />
                    </Link>
                </section>
                {/* Navlinks for large screen */}
                <div className=" flex items-center gap-6 ">
                {navLinks.map((navItem) => (
                <Link className="hidden lg:block text-[#757884] hover:text-[#fc8019] font-palanquin font-bold  mx-4 " key={navItem.label} href={navItem.link}>
                    {navItem.label}
                </Link>
                ))}
                </div>
            </div>

            {/* side bar mobile menu */}
            <div className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all ${isSideMenu ? '-translate-x-0' : '-translate-x-full'}`}>
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                <IoCloseSharp className="mt-0 mb-8 text-3xl cursor-pointer" onClick={() => setIsSideMenu(false)} />

                {navLinks.map((navItem) => (
                <Link className="font-bold text-[#757884] hover:text-[#fc8019] " key={navItem.label} href={navItem.link}>
                    {navItem.label}
                </Link>
                ))}
            </section>
            </div>

            {/* Last Section */}
            <section className="flex items-center gap-4 text-[#757884] hover:text-[#fc8019]">
            <GrCart className="text-3xl" />
            </section>
        </nav>
        <hr />
    </main>
  );
};

export default Header;
