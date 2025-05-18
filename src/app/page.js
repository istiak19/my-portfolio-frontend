'use client';

import AboutSection from "@/Components/AboutSection/AboutSection";
import Banner from "@/Components/Banner/Banner";
import EducationJourney from "@/Components/EducationJourney/EducationJourney";
import SkillSection from "@/Components/SkillSection/SkillSection";

export default function AnimatedBox() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <SkillSection />
      <EducationJourney />
    </div>
  );
}