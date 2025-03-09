import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSass, SiRedux, SiCplusplus,
  SiExpress, SiGraphql, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiDocker, SiKubernetes, SiGit, SiGithub,
  SiPostman, SiVite, SiNetlify, SiVercel
} from "react-icons/si";

import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Sass", icon: SiSass, color: "#cc6699" },
  { name: "Redux", icon: SiRedux, color: "#764abc" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "Express.js", icon: SiExpress, color: "#" },
  { name: "GraphQL", icon: SiGraphql, color: "#e535ab" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "MySQL", icon: SiMysql, color: "#3f9aff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#" },
  { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28" },
  { name: "C++", icon: SiCplusplus, color: "#00599c" },
  { name: "Java", icon: FaJava, color: "#f7b731" },
  { name: "Python", icon: FaPython, color: "#306998" },
  { name: "AWS", icon: FaAws, color: "#ff9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
  { name: "VS Code", icon: VscVscode, color: "#007acc" },
  { name: "Git", icon: SiGit, color: "#f34f29" },
  { name: "GitHub", icon: SiGithub, color: "#" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
  { name: "Vercel", icon: SiVercel, color: "#" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
