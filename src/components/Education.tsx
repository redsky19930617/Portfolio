import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

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
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
