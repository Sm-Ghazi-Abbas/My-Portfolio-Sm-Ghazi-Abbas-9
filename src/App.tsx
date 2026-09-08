import { useState } from 'react';
import { LensMode, Project } from './types';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import ArticlesSection from './components/ArticlesSection';
import DevTerminal from './components/DevTerminal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import InteractiveResumeModal from './components/InteractiveResumeModal';

export default function App() {
  const [activeLens, setActiveLens] = useState<LensMode>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Starfield & Subtle Cosmic Mesh */}
      <CosmicBackground />
      
      {/* Ambient Grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          activeLens={activeLens}
          onLensChange={setActiveLens}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            activeLens={activeLens}
            onLensChange={setActiveLens}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Technical & Commercial Projects Bento Grid */}
          <ProjectsSection
            activeLens={activeLens}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          {/* Real-world Internships & Experience */}
          <ExperienceSection activeLens={activeLens} />

          {/* Skills & Domain Competencies Matrix */}
          <SkillsSection activeLens={activeLens} />

          {/* AWS Cloud Certifications */}
          <CertificationsSection />

          {/* Education Foundations (UMT & FCCU) */}
          <EducationSection />

          {/* Medium Essays & Thought Leadership */}
          <ArticlesSection />

          {/* Interactive DevHQ Terminal */}
          <DevTerminal />

          {/* Contact & Proposal Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official ATS & Printable Resume Modal */}
      <InteractiveResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
