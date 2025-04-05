import React from 'react';
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IconType } from 'react-icons';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: { icon: IconType; color?: string }[];
}

export function ProjectCard({ title, description, image, link, github, techStack }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
        {/* Image */}
        <div className="relative overflow-hidden p-4 pb-0">
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + Icons */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                  <Icon className="w-6 h-6" color={item.color} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
