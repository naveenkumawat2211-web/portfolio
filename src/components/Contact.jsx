import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await axios.post("https://getform.io/f/raeqjora", data);

      toast.success("Message Sent Successfully ❤️");

      reset();
    } catch (err) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section
      name="Contact"
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
        <p className="uppercase tracking-widest text-red-600 font-semibold">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          Let's Work Together
        </h1>

        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>

        <p className="text-gray-500 mt-5">
          Have a project in mind? Feel free to contact me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <FaEnvelope className="text-red-600 text-xl" />
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500">
                  your@email.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <FaPhoneAlt className="text-red-600 text-xl" />
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-500">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-500">
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right */}

        <motion.form
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-2xl rounded-3xl p-8 border"
        >

          <div className="space-y-6">

            <div>

              <label className="font-semibold">
                Full Name
              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Enter your name"
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-red-500"
              />

              <p className="text-red-500 text-sm">
                {errors.name?.message}
              </p>

            </div>

            <div>

              <label className="font-semibold">
                Email
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Enter your email"
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-red-500"
              />

              <p className="text-red-500 text-sm">
                {errors.email?.message}
              </p>

            </div>

            <div>

              <label className="font-semibold">
                Message
              </label>

              <textarea
                rows="6"
                {...register("message", {
                  required: "Message is required",
                })}
                placeholder="Write your message..."
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-red-500"
              />

              <p className="text-red-500 text-sm">
                {errors.message?.message}
              </p>

            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-xl hover:scale-[1.02] duration-300 flex justify-center items-center gap-3"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;