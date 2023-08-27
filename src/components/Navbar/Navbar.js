import React, { useState } from "react";
import logoo from "../../assets/images/Logo/logoo.jpg";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600">
      <div className="md:hidden lg:block">
        <img src={logoo} alt="logo" />
      </div>
      <div
        className={`md:flex ${
          menuOpen ? "block" : "hidden"
        }   w-full md:w-auto space-x-10 `}
      >
        <ul className="flex flex-col lg:space-x-10    md:flex-row items-center py-2 md:py-0 ">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-whiteText font-catchyFont text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-whiteText font-catchyFont text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
