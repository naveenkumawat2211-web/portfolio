import React, { useState, useEffect } from "react";
import pic from "../../public/naveen2.png";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeNavbar = () => {
      setScroll(window.scrollY >= 40);
    };

    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const navItems = [
    "Home",
    "About",
    "Portfolio",
    "Experience",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scroll
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 lg:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={pic}
            alt="Naveen Kumawat"
            className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-red-500 object-cover"
          />

          <div className="leading-tight">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold">
              Naveen{" "}
              <span className="text-red-600">
                Kumawat
              </span>
            </h1>

            <p className="hidden sm:block text-xs text-gray-500">
              MERN Stack Developer
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              className="relative font-semibold cursor-pointer group"
            >
              <Link
                to={item}
                smooth
                spy
                offset={-70}
                duration={500}
                activeClass="text-red-600"
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}

        </ul>

        {/* Mobile Button */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenu(!menu)}
          className="lg:hidden text-2xl"
        >
          {menu ? <IoCloseSharp /> : <AiOutlineMenu />}
        </motion.button>

      </div>

            {/* Mobile Menu */}

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white z-[9998] overflow-y-auto shadow-xl"
          >
            <ul className="flex flex-col items-center py-8">

              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="w-full"
                >
                  <Link
                    to={item}
                    smooth
                    spy
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}
                    activeClass="text-red-600"
                    className="block w-full text-center py-4 text-lg font-semibold border-b border-gray-200 hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;