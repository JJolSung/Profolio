import React from 'react';
import Header from './_components/header';
import SectionAbout from './_components/sectionAbout';
import SectionEducation from './_components/sectionEducation';
import SectionSkills from './_components/sectionSkills';
import SectionExperience from './_components/sectionExperience';
import SectionProjects from './_components/sectionProjects';
import SectionAwards from './_components/sectionAwards';
import SectionStrengths from './_components/sectionStrengths';
import SectionContact from './_components/sectionContact';
import Footer from './_components/footer';
import SectionRecentLearning from './_components/sectionRecentLearning';

export default function Home() {
  // 네비게이션 메뉴에 추가
  const navItems = [
    'About',
    'Education',
    'Skills',
    'Experience',
    'Projects',
    'Awards',
    'Strengths',
    'RecentLearning',
    'Contact',
  ];

  return (
    <div className='font-sans'>
      {/* Header */}
      <Header navItems={navItems} />

      {/* Main Content */}
      <main className='container mx-auto mt-20 space-y-12 lg:px-40 px-6 pt-10'>
        <SectionAbout />
        <SectionEducation />
        <SectionSkills />
        <SectionExperience />
        <SectionProjects />
        <SectionAwards />
        <SectionStrengths />
        <SectionRecentLearning />
        <SectionContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
