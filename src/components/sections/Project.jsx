"use client";

import { Github } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

export default function Project() {
  return (
    <>
      <section id="project" className="min-w-screen h-auto py-10 px-8 bg-white">
        <h1 className="text-5xl text-center font-bold text-gray-900">
          Projects
        </h1>
        <div className="mt-4">
          <p className="text-xl font-semibold text-center text-gray-600">
            Showcase my Recent work and Technologies I am Passinate About.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center py-2 ">
          <ProjectCard
            title="Task Flow"
            description="Task Management AppTaskFlow is a modern, user-friendly, and efficient task and project management tool that enhances productivity through smart notifications, real-time updates, and comprehensive workflow visualization options."
            image="/assets/TaskFlow-Preview.png"
            github={"https://github.com/Mohit-246/TaskFlow"}
            live={"https://task-flow-one-chi.vercel.app/"}
            tech={["React", "Tailwindcss", "MongoDB", "Expressjs"]}
          />
          <ProjectCard
            title="Dishly"
            description="Dishly is an interactive recipe-sharing web application that allows users to sign up, create and edit their recipes, upload images, and browse dishes posted by others. It focuses on delivering a seamless user experience with a visually appealing and responsive interface. The platform also includes user profiles, allowing visitors to explore recipes by individual creators."
            image="https://dishly-app.vercel.app/"
            github={"https://github.com/Mohit-246/Dishly"}
            live={"https://dishly-app.vercel.app/"}
            tech={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB + Mongoose",
              "Multer +Cloudinary",
            ]}
          />
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Mohit-246"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2" size={20} />
            View All Projects
          </a>
        </div>
      </section>
    </>
  );
}
