'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import DeliveryPods from '@/components/DeliveryPods';
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Estimator from '@/components/Estimator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import { getProjectById, CeloraProject } from '@/data/projects';

export default function HomePage() {
  const [modalProject, setModalProject] = useState<CeloraProject | null>(null);
  const [contactPrefill, setContactPrefill] = useState<{
    service: string;
    message: string;
    budget: string;
  }>({
    service: 'saas',
    message: '',
    budget: ''
  });

  const handleApplyEstimate = (data: {
    type: string;
    typeName: string;
    podName: string;
    timeLabel: string;
    minPrice: number;
    maxPrice: number;
  }) => {
    setContactPrefill({
      service: data.type,
      message: `Hi CeloraIT Team,\n\nI used the Scope Estimator for a ${data.typeName} project.\n- Selected Pod: ${data.podName}\n- Expected Timeline: ${data.timeLabel}\n- Estimated Investment: $${data.minPrice.toLocaleString()} - $${data.maxPrice.toLocaleString()}\n\nPlease share your detailed proposal and pod availability.`,
      budget: `$${data.minPrice.toLocaleString()} - $${data.maxPrice.toLocaleString()}`
    });
  };

  const handleOpenProjectModal = (projectId: string) => {
    const project = getProjectById(projectId);
    if (project) {
      setModalProject(project);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <DeliveryPods />
        <Team />
        <Clients />
        <Estimator onApplyEstimate={handleApplyEstimate} />
        <Contact
          initialService={contactPrefill.service}
          initialMessage={contactPrefill.message}
          initialBudget={contactPrefill.budget}
        />
      </main>
      <Footer onProjectClick={handleOpenProjectModal} />

      {/* Deep-dive modal for links triggered from footer */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}
