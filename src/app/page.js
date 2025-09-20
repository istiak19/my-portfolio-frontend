"use client";

import Banner from "@/Components/Banner/Banner";
import AboutSection from "@/Components/AboutSection/AboutSection";
import SkillSection from "@/Components/SkillSection/SkillSection";
import ContactSection from "@/Components/ContactSection/ContactSection";
import ProjectSection from "@/Components/ProjectSection/ProjectSection";
import EducationJourney from "@/Components/EducationJourney/EducationJourney";

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