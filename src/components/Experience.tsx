import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Cyberxield Solutions",
    period: "Jan 2024 - Feb 2024",
    description: `My first taste of professional development! Got to work with the MERN stack and build stuff that users would interact with. 
    The highlight? Building a real-time dashboard that boosted user engagement by 40% (yeah, I was pretty proud of that). 
    Also learned why responsive design matters - nothing humbles you like seeing your desktop app look terrible on mobile.`,
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
  },
  {
    title: "Coders Club Lead",
    company: "College Tech Club",
    period: "Aug 2024 - Present",
    description: `Leading our college's coding community and managed the annual tech fest - coordinating events, competitions, and workshops for 500+ students! 
    Been guiding junior developers through their coding journey, teaching them DSA concepts and helping them build their first projects (pretty rewarding stuff). 
    Plus, organizing coding bootcamps and hackathons while mentoring students has been honestly one of the best parts - seeing growth never gets old.`,
    skills: ["Web-Dev", "DSA", "Teaching", "Hackathons", "Team Leadership"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My journey from 'Hello World' to leading teams and building stuffs">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
