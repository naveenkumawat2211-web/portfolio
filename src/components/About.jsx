import React from "react";
import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaBullseye,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section
      name="About"
      className="max-w-7xl mx-auto px-6 md:px-16 py-24"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-red-600 font-semibold uppercase tracking-widest">
          About Me
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          Know More About Me
        </h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>
      </motion.div>

      {/* Intro */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-8 border"
      >
        <h2 className="text-3xl font-bold mb-5">
          👋 Hello, I'm
          <span className="text-red-600"> Naveen Kumawat</span>
        </h2>

        <p className="text-gray-600 leading-8 text-justify">
          I am a passionate MERN Stack Developer who enjoys creating modern,
          responsive and high-performance web applications. My focus is on
          building clean UI, scalable backend systems and delivering smooth user
          experiences. I continuously learn new technologies and enjoy solving
          real-world problems through code.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-8 mt-14">

        {/* Education */}

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white shadow-xl rounded-2xl p-7 border"
        >
          <FaGraduationCap className="text-4xl text-red-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4">
            Education
          </h2>

          <p className="text-gray-600 leading-8">
            🎓 Bachelor of Computer Applications (BCA)
            <br />
            Tagore PG college , Gudha Gorji
            <br />
            2022 - Present
          </p>
        </motion.div>

        {/* Skills */}

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white shadow-xl rounded-2xl p-7 border"
        >
          <FaLaptopCode className="text-4xl text-red-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Node.js",
              "Express",
              "MongoDB",
              "Firebase",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}

          </div>
        </motion.div>

        {/* Experience */}

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white shadow-xl rounded-2xl p-7 border"
        >
          <FaBriefcase className="text-4xl text-red-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4">
            Experience
          </h2>

          <p className="text-gray-600 leading-8">
            ✔ MERN Stack Projects
            <br />
            ✔ Responsive Website Development
            <br />
            ✔ Firebase Authentication
            <br />
            ✔ REST API Development
            <br />
            ✔ Portfolio Websites
          </p>
        </motion.div>

        {/* Achievement */}

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white shadow-xl rounded-2xl p-7 border"
        >
          <FaAward className="text-4xl text-red-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4">
            Achievements
          </h2>

          <p className="text-gray-600 leading-8">
            🏆 Built Multiple MERN Projects
            <br />
            🏆 Firebase Authentication
            <br />
            🏆 Responsive UI Development
            <br />
            🏆 Portfolio & Landing Pages
          </p>
        </motion.div>

      </div>

      {/* Mission */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl text-white p-10 mt-16 shadow-2xl"
      >
        <FaBullseye className="text-5xl mb-5" />

        <h2 className="text-3xl font-bold mb-4">
          My Mission
        </h2>

        <p className="leading-8 text-lg">
          My mission is to build high-quality, modern and scalable web
          applications that solve real-world problems while continuously
          improving my skills and contributing to innovative digital solutions.
        </p>
      </motion.div>
    </section>
  );
}

export default About;