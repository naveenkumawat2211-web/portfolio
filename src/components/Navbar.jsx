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

    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Portfolio",
    "Experience",
    "Contact",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scroll
            ? "bg-white/80 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex justify-between items-center">

          {/* Logo */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={pic}
              alt=""
              className="w-14 h-14 rounded-full border-2 border-red-500 object-cover"
            />

            <div>
              <h1 className="text-xl font-bold">
                Naveen{" "}
                <span className="text-red-600">
                  Kumawat
                </span>
              </h1>

              <p className="text-sm text-gray-500">
                MERN Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-10">

            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -3 }}
                className="relative cursor-pointer font-semibold group"
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

                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}

          </ul>

          {/* Mobile Button */}

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <IoCloseSharp size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </motion.div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-20 right-0 w-full h-screen bg-white flex justify-center items-center md:hidden"
            >
              <ul className="space-y-10 text-3xl font-bold">

                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      onClick={() => setMenu(false)}
                      to={item}
                      smooth
                      duration={500}
                      offset={-70}
                      className="cursor-pointer hover:text-red-600 duration-300"
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
    </>
  );
}

export default Navbar;