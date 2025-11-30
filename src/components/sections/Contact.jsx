"use client";

import Lottie from "lottie-react";
import { Send } from "lucide-react";
import rocket from "@/animation/rocket.json";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      toast.error("Fill All The Field Required !!");
      return;
    }

    try {
      const response = await axios.post("/api/contact", formData);

      if (!response.data.success) {
        toast.error("Something Went Wrong");
        return;
      }

      toast.success("Message Sent Successfully!");
      console.log("Success:", response.data);

      // reset form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast.error("Server Error");
      console.log("Error:", err.response?.data);
    }
  };

  return (
    <section
      id="contact"
      className="min-w-screen h-auto py-10 px-8 bg-linear-to-br from-white via-blue-50 to-blue-200"
    >
      <h1 className="text-5xl text-center font-bold text-gray-900">
        Let's Connect !!
      </h1>

      <p className="mt-4 text-xl font-semibold text-center text-gray-600">
        Fill and Send Details to Reach out.
      </p>

      <div className="mt-16 w-full flex flex-col md:flex-row items-center justify-evenly md:px-8">
        {/* FORM CARD */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl space-y-4 px-8 py-8 shadow-md">
          <div className="space-y-1">
            <h2 className="text-4xl font-bold text-gray-800">Contact us!!</h2>
            <h3 className="text-sm font-light text-gray-500">
              (Fill the Correct Details) <span className="text-red-500">*</span>
            </h3>
          </div>

          <form onSubmit={submitForm} className="mt-8 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-200 font-medium focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-2 rounded bg-gray-200 font-medium focus:outline-none"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block font-semibold mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                maxLength={10}
                pattern="\d{10}"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-2 rounded bg-gray-200 font-medium focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2 rounded bg-gray-200 font-medium focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-3 text-white font-semibold text-lg bg-blue-400 px-4 py-2 rounded-full transform duration-200 hover:scale-110 focus:outline-none"
            >
              Send Message <Send size={25} />
            </button>
          </form>
        </div>

        {/* ANIMATION */}
        <Lottie
          animationData={rocket}
          loop={true}
          className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] mx-8 my-4"
        />
      </div>
    </section>
  );
}
