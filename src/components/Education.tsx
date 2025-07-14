import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';
import { motion } from 'framer-motion';

// Animation variants for education timeline
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'St. Andrews Institute of Technology and Management, Gurgaon',
    period: '2022 - 2026',
    score: '80%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Inter Science College, Hazaribagh',
    period: '2019 - 2021',
    score: '88%',
  },
  {
    degree: 'Secondary (X)',
    institution: "St. Paul's School, Hazaribagh",
    period: '2017 - 2019',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where I learned theory and then forgot half of it while learning to actually code 😅">Education</SectionTitle>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl mx-auto space-y-10"
          >
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
