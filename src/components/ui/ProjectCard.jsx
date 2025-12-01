"use client";

import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  live,
  tech,
}) {
  return (
    <>
      <div className="group h-full bg-gray-100 rounded-xl overflow-hidden border border-blue-300 hover:border-blue-800 transition-all hover:transform hover:scale-105">
        <div className="relative overflow-hidden">
          <iframe
            src={image}
            alt={title}
            title={title}
            className="w-full h-56 object-top-left"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
            <div className="flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-400 rounded-full hover:bg-gray-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-400 rounded-full hover:bg-gray-500 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 mb-41">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm bg-blue-300/20 text-blue-800 rounded-full border border-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
