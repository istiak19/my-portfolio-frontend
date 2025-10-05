"use client";

import AboutSection from "@/src/components/AboutSection/AboutSection";
import Banner from "@/src/components/Banner/Banner";
import BlogSection from "@/src/components/BlogSection/BlogSection";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import EducationJourney from "@/src/components/EducationJourney/EducationJourney";
import ProjectSection from "@/src/components/ProjectSection/ProjectSection";
import SkillSection from "@/src/components/SkillSection/SkillSection";

export default function AnimatedBox() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <SkillSection />
      <EducationJourney />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}