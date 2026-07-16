import React from "react";
import { motion } from "framer-motion";

import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import python from "../../public/python.webp";
import java from "../../public/java.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      desc: "NoSQL Database for modern web applications.",
    },
    {
      id: 2,
      logo: express,
      name: "Express.js",
      desc: "Fast and lightweight backend framework.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React.js",
      desc: "Frontend Library for interactive UI.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node.js",
      desc: "JavaScript runtime for backend.",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      desc: "Powerful language for automation and AI.",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      desc: "Object Oriented Programming Language.",
    },
  ];

  return (
    <section
      name="Portfolio"
      className="max-w-7xl mx-auto px-6 md:px-16 py-24"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-red-600 font-semibold uppercase tracking-widest">
          Portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          My Tech Stack
        </h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-500 mt-5">
          Technologies I use for building scalable web applications.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {cardItem.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border hover:shadow-red-200 duration-300"
          >
            {/* Image */}

            <div className="bg-gradient-to-r from-red-50 to-pink-50 py-8 flex justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Content */}

            <div className="p-6">

              <h2 className="text-2xl font-bold text-center">
                {item.name}
              </h2>

              <p className="text-gray-600 text-center mt-3">
                {item.desc}
              </p>

              {/* Buttons */}

              <div className="flex gap-4 mt-7">

                <button className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 duration-300 flex justify-center items-center gap-2">
                  <FaExternalLinkAlt />
                  Live
                </button>

                <button className="flex-1 border-2 border-red-600 text-red-600 py-3 rounded-xl hover:bg-red-600 hover:text-white duration-300 flex justify-center items-center gap-2">
                  <FaGithub />
                  GitHub
                </button>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Portfolio;