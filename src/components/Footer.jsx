import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com",
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-r from-slate-950 via-gray-900 to-black text-white mt-24">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">

          <div className="grid md:grid-cols-3 gap-12">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold">
                Naveen
                <span className="text-red-500">
                  {" "}Kumawat
                </span>
              </h1>

              <p className="mt-6 text-gray-400 leading-8">
                Passionate MERN Stack Developer creating beautiful,
                responsive and modern web applications using the latest
                technologies.
              </p>
            </motion.div>

            {/* Quick Links */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Quick Links
              </h2>

              <ul className="space-y-4">

                {[
                  "Home",
                  "About",
                  "Portfolio",
                  "Experience",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth
                      duration={500}
                      offset={-70}
                      className="cursor-pointer text-gray-400 hover:text-red-500 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

              </ul>
            </motion.div>

            {/* Contact */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Connect With Me
              </h2>

              <div className="flex gap-4">

                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                    whileTap={{
                      scale: .9,
                    }}
                    className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center hover:bg-red-600 duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}

              </div>

              <p className="mt-8 text-gray-400">
                📧 naveenkumawat@gmail.com
              </p>

              <p className="mt-2 text-gray-400">
                📱 +91 75XXX X6371
              </p>

              <p className="mt-2 text-gray-400">
                📍 Rajasthan, India
              </p>

            </motion.div>

          </div>

          {/* Divider */}

          <div className="border-t border-gray-700 my-10"></div>

          {/* Bottom */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-center">
              © {new Date().getFullYear()}{" "}
              <span className="text-red-500 font-semibold">
                Naveen Kumawat
              </span>
              . All Rights Reserved.
            </p>

            <p className="text-gray-400">
              Made with ❤️ using React & Tailwind CSS
            </p>

          </div>

        </div>

      </footer>

      {/* Scroll To Top */}

      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        whileHover={{
          scale: 1.15,
          y: -5,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-red-600 text-white shadow-2xl flex items-center justify-center hover:bg-red-700 transition"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </>
  );
}

export default Footer;