import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
      await emailjs.send(
        "service_vws18m5",
        "template_wkkbqh1",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        {
          publicKey: "3TWD5dtU7cnYwoY7H",
        }
      );

      toast.success("Message Sent Successfully ❤️");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      name="Contact"
      id="contact"
      className="w-full bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-600 font-semibold text-lg">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Let's Work Together
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Me
            </h3>

            <p className="text-gray-600 leading-7 mb-8">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:naveenkumawat2211@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl group-hover:bg-red-600 group-hover:text-white transition duration-300">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold text-gray-800 group-hover:text-red-600 transition">
                    naveenkumawat2211@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917597386371"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl group-hover:bg-red-600 group-hover:text-white transition duration-300">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold text-gray-800 group-hover:text-red-600 transition">
                    +91 7597386371
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold text-gray-800">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-red-500 bg-white`}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-red-500 bg-white`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-red-500 bg-white resize-none`}
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-white font-semibold transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 hover:scale-[1.02]"
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;