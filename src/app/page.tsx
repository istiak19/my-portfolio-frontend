"use client";

import AboutSection from "../components/AboutSection/AboutSection";
import Banner from "../components/Banner/Banner";
import ContactSection from "../components/ContactSection/ContactSection";
import EducationJourney from "../components/EducationJourney/EducationJourney";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import SkillSection from "../components/SkillSection/SkillSection";

// import Banner from "@/Components/Banner/Banner";
// import AboutSection from "@/Components/AboutSection/AboutSection";
// import SkillSection from "@/Components/SkillSection/SkillSection";
// import ContactSection from "@/Components/ContactSection/ContactSection";
// import ProjectSection from "@/Components/ProjectSection/ProjectSection";
// import EducationJourney from "@/Components/EducationJourney/EducationJourney";

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