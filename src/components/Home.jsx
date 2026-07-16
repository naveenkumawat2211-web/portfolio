import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

import pic from "../../public/naveen2.png";

import {
  FaSquareFacebook,
  FaTelegram,
  FaNodeJs,
} from "react-icons/fa6";

import { FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

function Home() {
  const socialLinks = [
    {
      icon: <FaSquareFacebook />,
      link: "https://facebook.com",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
    },
    {
      icon: <IoLogoYoutube />,
      link: "https://youtube.com",
    },
    {
      icon: <FaTelegram />,
      link: "https://t.me",
    },
  ];

  const skills = [
    <SiMongodb />,
    <SiExpress />,
    <FaReact />,
    <FaNodeJs />,
  ];

  return (
    <>
      <section
        id="home"
        className="min-h-screen max-w-screen-2xl md:mt-8 mx-auto px-6 md:px-20 flex items-center"
      >
        <div className="grid md:grid-cols-2  gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-red-100 text-red-600  px-4 py-2 rounded-full font-semibold">
              👋 Welcome To My Portfolio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6">
              Hi, I'm
              <span className="text-red-600"> Developer</span>
            </h1>

            <div className="flex items-center text-2xl md:text-4xl font-semibold mt-4">
              <span>I am&nbsp;</span>

              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "React Developer",
                  "Programmer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-red-600"
              />
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-justify">
              Passionate Full Stack MERN Developer who loves building modern,
              responsive and high-performance web applications with React,
              Node.js, Express and MongoDB. I enjoy creating beautiful user
              interfaces with smooth animations and optimized performance.
            </p>

            <div className="flex gap-5 mt-8">
              <button className="px-7 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 duration-300 shadow-lg hover:scale-105">
                Download CV
              </button>

              <button className="px-7 py-3 rounded-xl border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-300">
                Contact Me
              </button>
            </div>

            {/* Social */}

            <div className="flex flex-col md:flex-row justify-between mt-12 gap-10">

              <div>
                <h2 className="font-bold mb-4">
                  Connect With Me
                </h2>

                <div className="flex gap-5">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      whileHover={{
                        scale: 1.3,
                        rotate: 10,
                      }}
                      whileTap={{ scale: 0.9 }}
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-3xl hover:text-red-600 duration-300"
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-bold mb-4">
                  Tech Stack
                </h2>

                <div className="flex gap-5">
                  {skills.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -10,
                        rotate: 8,
                        scale: 1.2,
                      }}
                      className="text-4xl p-3 rounded-full border shadow-md hover:bg-red-600 hover:text-white duration-300 cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              src={pic}
              loading="lazy"
              alt="Developer"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="w-[300px] md:w-[470px] md:h-[600px] rounded-full border-8 border-red-100 shadow-[0_20px_80px_rgba(239,68,68,0.35)]"
            />
          </motion.div>

        </div>
      </section>

      <hr />
    </>
  );
}

export default Home;