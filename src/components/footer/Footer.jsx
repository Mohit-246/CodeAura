"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className=" min-w-screen h-auto py-10 px-8 bg-gray-900">
        <div className="flex flex-col md:flex-row gap-4  justify-around px-6 py-4 ">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold text-sky-500 ">
              {/* CodeAura */}
              <Image
                src="/assets/logo.png"
                alt="Code Aura"
                title="Code Aura"
                width={100}
                height={100}
              />
            </h1>
            <ul className="flex flex-row gap-8 list-disc text-sm text-gray-300">
              <li> Full Stack Developer </li>
              <li>Problem Solver</li>
              <li> Coding Enthusiast</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mohit-chaudhary-/"
                target="_blank"
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:chaudharymohit2408@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
                target="_blank"
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <MailIcon size={20} />
              </a>
              <a
                href="https://github.com/Mohit-246"
                target="_blank"
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-gray-100 font-bold">Quick Links</h2>
            <ul className="flex flex-col space-y-1">
              <li className="text-sm text-gray-400">
                <a href="#">Home</a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="#about">About</a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="/experience">Experience</a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-gray-100 font-bold">
              Help & Suggestions
            </h2>
            <ul className="flex flex-col space-y-1">
              <li className="text-sm text-gray-400">
                <b>Email :</b> chaudharymohit2408@gmail.com
              </li>
              <li className="text-sm text-gray-400">
                Contact for Suggestions??
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-center text-gray-500 mt-6">
          Mohit @2025 || All Rights Reserverd by Me(Mohit)
        </p>
      </div>
    </>
  );
}
