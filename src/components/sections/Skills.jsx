"use client";

import { Code2, Palette, Star, Zap } from "lucide-react";

export default function Skills() {
  return (
    <>
      <section id="skills" className="min-w-full py-10 px-8 bg-linear-to-br from-white via-blue-50 to-white">
        <h1 className="text-5xl text-center font-bold text-gray-900">Skills</h1>
        <div className="mt-4">
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-10">
            Skilled & Trusted by Modern Tech
          </h2>
        </div>

        <div className="flex w-full items-center justify-evenly">
          <div className="grid grid-cols-1 md:w-1/3 space-y-8 justify-evenly py-10 md:px-8 items-center text-center">
            {/* Card 1 */}
            <div className="flex flex-col items-center gap-2 px-6">
              <h3 className="text-2xl font-bold text-blue-600">4.9/5</h3>

              <div className="flex text-yellow-400">
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
              </div>

              <p className="text-sm text-gray-500">Frontend Skills</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-300"></div>

            {/* Card 2 */}
            <div className="flex flex-col items-center gap-2 px-6">
              <h3 className="text-2xl font-bold text-blue-600">4.7/5</h3>

              <div className="flex text-yellow-400">
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} />
              </div>

              <p className="text-sm text-gray-500">Backend Skills</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-300"></div>

            {/* Card 3 */}
            <div className="flex flex-col items-center gap-2 px-6">
              <h3 className="text-2xl font-bold text-blue-600">4.8/5</h3>

              <div className="flex text-yellow-400">
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} fill="gold" />
                <Star size={20} />
              </div>

              <p className="text-sm text-gray-500">UI/UX & Design Skills</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col space-y-6">
            <div className="p-6 bg-blue-100/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                  <Code2 className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Clean Code</h3>
              </div>
              <p className="text-slate-400">
                Writing maintainable, scalable, and well-documented code that
                stands the test of time.
              </p>
            </div>

            <div className="p-6 bg-blue-100/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg mr-4">
                  <Palette className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
              </div>
              <p className="text-slate-400">
                Creating intuitive and beautiful user interfaces that provide
                exceptional user experiences.
              </p>
            </div>

            <div className="p-6 bg-blue-100/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                  <Zap className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Performance</h3>
              </div>
              <p className="text-slate-400">
                Optimizing applications for speed, efficiency, and seamless
                performance across all devices.
              </p>
            </div>
          </div>
        </div>
        {/* Logo Row */}
        <div className="overflow-hidden my-16">
          <div className="flex gap-16 animate-slide whitespace-nowrap w-max">
            <img src="/skills/html.png" alt="HTML" className="h-15" />
            <img src="/skills/css.png" alt="CSS" className="h-15" />
            <img
              src="/skills/javascript.png"
              alt="javascript"
              className="h-15"
            />
            <img src="/skills/react.png" alt="React" className="h-15" />
            <img src="/skills/nextjs.png" alt="Next.js" className="h-15" />
            <img
              src="/skills/tailwindcss.png"
              alt="Tailwind"
              className="h-15"
            />
            <img src="/skills/nodejs.png" alt="Node" className="h-15" />
            <img
              src="/skills/expressjs.png"
              alt="Express.js"
              className="h-15"
            />
            <img src="/skills/mongodb.png" alt="MongoDB" className="h-15" />
            <img src="/skills/github.png" alt="Github" className="h-15" />
            <img src="/skills/java.png" alt="java" className="h-15" />

            <img src="/skills/html.png" alt="HTML" className="h-15" />
            <img src="/skills/css.png" alt="CSS" className="h-15" />
            <img
              src="/skills/javascript.png"
              alt="javascript"
              className="h-15"
            />
            <img src="/skills/react.png" alt="React" className="h-15" />
            <img src="/skills/nextjs.png" alt="Next.js" className="h-15" />
            <img
              src="/skills/tailwindcss.png"
              alt="Tailwind"
              className="h-15"
            />
            <img src="/skills/nodejs.png" alt="Node" className="h-15" />
            <img
              src="/skills/expressjs.png"
              alt="Express.js"
              className="h-15"
            />
            <img src="/skills/mongodb.png" alt="MongoDB" className="h-15" />
            <img src="/skills/github.png" alt="Github" className="h-15" />
            <img src="/skills/java.png" alt="java" className="h-15" />
          </div>
        </div>
      </section>
    </>
  );
}
