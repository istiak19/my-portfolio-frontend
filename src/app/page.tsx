"use client";

import AboutSection from "../components/AboutSection/AboutSection";
import Banner from "../components/Banner/Banner";
import ContactSection from "../components/ContactSection/ContactSection";
import EducationJourney from "../components/EducationJourney/EducationJourney";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import SkillSection from "../components/SkillSection/SkillSection";

export default function AnimatedBox() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <SkillSection />
      <EducationJourney />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}