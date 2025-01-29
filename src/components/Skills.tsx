import { SectionTitle } from './ui/SectionTitle';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVite } from 'react-icons/si';
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  {name: 'HTML', icon: SiHtml5, color: '#e34f26'},
  {name: 'CSS', icon: SiCss3, color: '#1572b6'},
  {name: 'JavaScript', icon: SiJavascript, color: '#f7df1e'},
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'Express.js', icon: SiExpress , color: '' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Next.js', icon: SiNextdotjs, color: '' },
  { name: 'Java', icon: FaJava, color: '#f7b731' },
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  {name: 'Firebase', icon: IoLogoFirebase , color: '#ffca28'},
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'GitHub', icon: SiGithub, color: '' },
];


export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* skills */}
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg  shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
