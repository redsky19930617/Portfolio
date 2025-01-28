import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { CertificationCard } from './ui/CertificationCard';

const certifications = [
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Nov 2023',
    link: 'https://www.linkedin.com/learning/certificates/4b0455567c3cfda25e8ef1896c3639f05112af66ace4292ed1004466ef830c94',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQH9Bl60mLooEA/feedshare-shrink_1280/feedshare-shrink_1280/0/1693230478401?e=2147483647&v=beta&t=D95AvRlyCt7mPdJFFCCtaIbkvxz_EcmG0CAReYysB_E',
  },
  {
    title: 'Python 3 Ultimate Guide',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: 'https://www.udemy.com/certificate/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457.jpg?v=1697713760000',
  },
  {
    title: 'PW Backend Development Course',
    issuer: 'Physics Wallah',
    date: 'Mar 2024',
    link: 'https://pwskills.com/learn/certificate/1e3f9e1e-9108-4685-bfa0-6325856f3823/',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQF8LaQ8mkTHDg/feedshare-shrink_800/feedshare-shrink_800/0/1710078484144?e=1740614400&v=beta&t=owk4SA8ntA4zY__YlZJE_GymoqVnfTIODTQrAGDH9Ok',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}