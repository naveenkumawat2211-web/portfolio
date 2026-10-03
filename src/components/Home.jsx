import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

import pic from "../../public/naveen2.png";

import {
  FaSquareFacebook,
  FaTelegram,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa6";

import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

function Home() {
  const socialLinks = [
    {
      icon: <FaSquareFacebook />,
      link: "https://www.facebook.com/profile.php?id=100093429035972",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/naveen-kumawat2211/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/naveenkumawat2211-web",
    },
    {
      icon: <FaTelegram />,
      link: "https://t.me/naveenkumawat2211",
    },
  ];

  const skills = [
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      link: "https://react.dev/",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      link: "https://nodejs.org/",
    },
  ];

  return (
    <>
      <section
        id="Home"
        className="min-h-screen pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 overflow-x-hidden flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm sm:text-base font-semibold">
              👋 Welcome To My Portfolio
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-red-600">
                Developer
              </span>
            </h1>

            <div className="flex flex-wrap items-center mt-5 text-xl sm:text-2xl lg:text-4xl font-semibold">
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

            <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base lg:text-lg text-justify">
              Passionate Full Stack MERN Developer who loves building
              modern, responsive and high-performance web applications
              with React, Node.js, Express and MongoDB. I enjoy creating
              beautiful user interfaces with smooth animations and
              optimized performance.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              {/* Download CV */}
              <a
                href="/NaveenFrontend%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 duration-300 shadow-lg hover:scale-105 text-center"
              >
                Download CV
              </a>

              {/* Contact Me */}
              <a
                href="https://www.linkedin.com/in/naveen-kumawat2211/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-xl border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-300 text-center"
              >
                Contact Me
              </a>

            </div>

            {/* Social + Skills */}

            <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">

              {/* Social Links */}

              <div>
                <h2 className="font-bold mb-4 text-lg">
                  Connect With Me
                </h2>

                <div className="flex flex-wrap gap-4">

                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.2,
                        rotate: 8,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl hover:text-red-600 transition"
                    >
                      {item.icon}
                    </motion.a>
                  ))}

                </div>
              </div>

              {/* Tech Stack */}

              <div>
                <h2 className="font-bold mb-4 text-lg">
                  Tech Stack
                </h2>

                <div className="flex flex-wrap gap-4">

                  {skills.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      whileHover={{
                        y: -8,
                        scale: 1.15,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="text-3xl sm:text-4xl p-3 rounded-full border shadow-md hover:bg-red-600 hover:text-white transition cursor-pointer"
                    >
                      {item.icon}
                    </motion.a>
                  ))}

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.img
              src={pic}
              alt="Developer"
              loading="lazy"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="w-64 sm:w-72 md:w-80 lg:w-[450px] xl:w-[500px] rounded-full border-8 border-red-100 shadow-[0_20px_80px_rgba(239,68,68,0.35)] object-cover"
            />
          </motion.div>

        </div>
      </section>

      <hr />
    </>
  );
}

export default Home;