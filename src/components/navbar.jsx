import { useState } from "react";
import { navigationLinks } from "../util/constans";
import { styles } from "../util/style";
import { logo, menu, closee } from "../assets";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);

  return (
    <div className={`w-full flex  ${styles.flexBetween}`}>
      {/* Logo */}
      <div className={`${styles.heading}`}>
        <img
          src={`${logo}`}
          alt="logotip"
          className="w-[150px] h-[55px] cursor-pointer"
        />
      </div>

      {/* Navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li
            key={idx}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
              idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            }
            ${active === nav.id ? "text-white" : "text-lightWhite"}
            hover:text-white transition-all duration-500
            `}
            onClick={() => activeHandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggleNav ? closee : menu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6  absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}
        >
          {/* Navigation link */}
          <ul className="list-none flex  justify-center items-center flex-1 ">
            {navigationLinks.map((nav, idx) => (
              <li
                key={idx}
                className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
                  idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                }
              ${active === nav.id ? "text-white" : "text-lightWhite"}
              hover:text-white transition-all duration-500
              `}
                onClick={() => activeHandler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
