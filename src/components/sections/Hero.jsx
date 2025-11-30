"use client";

import Lottie from "lottie-react";
import desk from "@/animation/desk.json";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const words = [
    "Fullstack Developer",
    "Problem Solver",
    "UI Designer",
    "Student",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delayPause, setDelayPause] = useState(false);

  const speed = 120;
  const backSpeed = 50;
  const delay = 800;

  useEffect(() => {
    const current = words[index];
    let timer;

    if (delayPause) {
      timer = setTimeout(() => setDelayPause(false), delay);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setDelayPause(true); // ← PAUSE HERE
          setIsDeleting(true);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));

        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, backSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, delayPause]);

  return (
    <>
      <section
        id=""
        className="mt-25 lg:mt-0 flex items-center min-h-screen md:px-8 py-16 bg-linear-to-br from-white via-blue-50 to-white"
      >
        <div className="flex flex-col lg:flex-row items-center justify-evenly h-full w-full">
          <div className="space-y-6 mb-8 md:w-2/3 ">
            <div className="px-8 py-3 space-y-6">
              <h2 className="text-lg text-gray-800 font-semibold">
                Hello I am Mohit, & I am a
              </h2>
              <h1 className="text-3xl md:text-6xl font-bold text-blue-400 leading-[1.1]">
                <span>
                  {text}
                  <span className="font-light cursor">|</span>
                </span>
              </h1>
              <p className="text-sm font-semibold text-gray-500">
                I am a Fullstack Developer crafting fast, modern and scalable
                digital experiences. I turn ideas into high-quality web
                applications with precision and performance.
              </p>
            </div>

            <div className="flex md:flex-row flex-col gap-4 items-center px-6 mt-4">
              <a
                href="#project"
                className="flex gap-2 bg-blue-400 px-4 py-2 rounded-full font-semibold text-white transform duration-200 hover:scale-110"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="flex gap-2 border border-blue-400 px-4 py-2 rounded-full font-semibold text-blue-400 transform duration-200 hover:scale-110"
              >
                Let's Connect !!
              </a>
            </div>
          </div>

          <Lottie
            animationData={desk}
            loop={true}
            className="h=[240px] w-[300px] md:h-[600px] md:w-[600px] mx-8 my-4"
          />
        </div>
      </section>
    </>
  );
}
