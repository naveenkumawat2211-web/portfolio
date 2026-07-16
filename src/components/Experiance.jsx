import React from "react";
import { motion } from "framer-motion";

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experience() {
  const skills = [
    {
      id: 1,
      logo: html,
      name: "HTML5",
      level: "95%",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
      level: "90%",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      level: "88%",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
      level: "80%",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
      level: "75%",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
      level: "70%",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
      level: "72%",
    },
  ];

  return (
    <section
      name="Experience"
      className="max-w-7xl mx-auto px-6 md:px-16 py-24"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-red-600 font-semibold uppercase tracking-widest">
          My Skills
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          Experience & Technologies
        </h1>

        <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>

        <p className="text-gray-500 mt-6">
          Technologies that I use to build modern web applications.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {skills.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className="bg-white rounded-3xl shadow-xl border p-8 text-center hover:shadow-red-200 duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-red-100 p-2"
            />

            <h2 className="text-xl font-bold mt-5">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Skill Level
            </p>

            {/* Progress */}

            <div className="w-full bg-gray-200 rounded-full h-3 mt-5 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.level }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full"
              />

            </div>

            <p className="mt-3 font-semibold text-red-600">
              {item.level}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Experience;