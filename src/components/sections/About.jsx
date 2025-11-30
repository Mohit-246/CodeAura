"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="min-w-screen h-auto py-10 px-8 bg-white">
        <h1 className="text-5xl text-center font-bold text-gray-900">
          About Me
        </h1>
        <div className="mt-4">
          <p className="text-xl font-semibold text-center text-gray-600">
            I’m Mohit, a web and app developer currently pursuing B.Tech in
            Computer Science.
          </p>
          <p className="text-xl font-semibold text-center text-gray-600">
            I love building clean, functional digital products and constantly
            improving my full-stack development skills.
          </p>
        </div>
        <div className="md:flex md:flex-row flex-col space-y-4 w-full items-center justify-evenly px-8 py-4">
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              My Journey!!
            </h2>
            <p className="text-sm text-gray-700 mt-3 ">
              My development journey began with curiosity — a desire to
              understand how websites and applications come to life. I started
              learning the fundamentals of web development, experimenting with
              small projects, and slowly building a strong foundation in HTML,
              CSS, JavaScript, React and backend technologies.
            </p>
            <p className="text-sm text-gray-700 mt-3 ">
              Over time, I explored frameworks, databases, and full-stack
              concepts, working on real projects that helped me grow both
              technically and creatively. Today, I’m focused on mastering
              Node.js, Express.js, MongoDB, and modern development practices
              while building projects that reflect my skills, passion, and
              continuous learning mindset.
            </p>
            <h2 className=" mt-4 text-lg font-semibold text-gray-800">
              Quick Links
            </h2>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/mohit-chaudhary-/"
                target="_blank"
                className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:chaudharymohit2408@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
                target="_blank"
                className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                <MailIcon size={20} />
              </a>
              <a
                href="https://github.com/Mohit-246"
                target="_blank"
                className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-2/3">
            <img
              src="/skills/profile.jpg"
              alt="Profile-img"
              className="rounded-full md:h-56 w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
