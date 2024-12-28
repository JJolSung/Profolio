import React from 'react';
import Header from './_components/header';
import SectionAbout from './_components/sectionAbout';
import SectionSkills from './_components/sectionSkills';
import SectionExperience from './_components/sectionExperience';
import SectionProjects from './_components/sectionProjects';
import Footer from './_components/footer';

const navItems = ['About', 'Skills', 'Experience', 'Projects'];

export default function Home() {
  return (
    <div className='font-sans'>
      {/* Header */}
      <Header navItems={navItems} />

      {/* Main Content */}
      <main className='container mx-auto mt-20 space-y-12 px-3 pt-10'>
        {/* About Me Section */}
        <SectionAbout />

        {/* Skills Section */}
        <SectionSkills />

        {/* Experience Section */}
        <SectionExperience />

        {/* Projects Section */}
        <SectionProjects />

        {/* Contact Section */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
