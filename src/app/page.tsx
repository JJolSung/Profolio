import React from 'react';
import Header from './_components/header';
import SectionAbout from './_components/sectionAbout';
import SectionSkills from './_components/sectionSkills';
import SectionExperience from './_components/sectionExperience';
import SectionProjects from './_components/sectionProjects';
import SectionAwards from './_components/sectionAwards';
import SectionStrengths from './_components/sectionStrengths';
import Footer from './_components/footer';
import SectionRecentLearning from './_components/sectionRecentLearning';

export default function Home() {
  const navItems = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Awards',
    'Strengths',
    'RecentLearning',
  ];

  return (
    <div className='font-sans'>
      {/* Header */}
      <Header navItems={navItems} />

      {/* Main Content */}
      <div className='mx-auto w-full mt-20 space-y-12'>
        <SectionAbout />
        <SectionSkills />
        <SectionExperience />
        <SectionProjects />
        <SectionAwards />
        <SectionStrengths />
        <SectionRecentLearning />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
