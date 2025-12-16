"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [!menuOpen]);

  const styleClasses = `relative px-1 py-2
     after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
     after:bottom-1 after:w-0 after:h-0.5 after:bg-sky-600
     after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <>
      <nav
        className={`fixed top-0 right-0 z-50 w-full shadow-2xs  ${
          isScrolled ? "bg-gray-100" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-around py-6 px-4 ">
          <h1 className="text-3xl font-bold text-sky-500 ">
            <a href="/">{/* CodeAura */}<Image src="/assets/logo.png" width={100} height={40}alt="code aura " title="code aura" /></a>
          </h1>
          <ul className="hidden md:flex items-center gap-6">
            <li className={styleClasses}>
              <a href="# ">Home</a>
            </li>
            <li className={styleClasses}>
              <a href="#about">About</a>
            </li>
            <li className={styleClasses}>
              <a href="#skills">Skills</a>
            </li>
            <li className={styleClasses}>
              <a href="#project">Projects</a>
            </li>
            <li className={styleClasses}>
              <a href="#experience">Experience</a>
            </li>
          </ul>

          <div className="flex  items-center gap-4">
            <button className="hidden md:block px-4 py-2 bg-blue-400 rounded-4xl text-white font-semibold">
              Resume
            </button>
            <a
              href="#contact"
              className="hidden md:block px-4 py-1.5 bg-white rounded-4xl text-blue-400 border-2 border-blue-300 font-semibold"
            >
              Contact me !!
            </a>
          </div>

          <div className="md:hidden p-3 bg-gray-200 border border-blue-500 rounded-md">
            <button onClick={() => setMenuOpen(true)}>☰</button>
          </div>
        </div>
        {menuOpen && (
          <>
            <ul className="md:hidden flex flex-col gap-6 px-4 bg-white">
              <li className={styleClasses} onClick={() => setMenuOpen(false)}>
                <a href="/">Home</a>
              </li>
              <li className={styleClasses} onClick={() => setMenuOpen(false)}>
                <a href="/about">About</a>
              </li>
              <li className={styleClasses} onClick={() => setMenuOpen(false)}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styleClasses} onClick={() => setMenuOpen(false)}>
                <a href="/experience">Experience</a>
              </li>
              <li className={styleClasses} onClick={() => setMenuOpen(false)}>
                <a href="/project">Projects</a>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
}
