import WithTransition from "../with-transition/WithTransition";

import { AboutSection } from "../../components/about-section/AboutSection";
import { AccompanyStackSection } from "../../components/accompany-stack-section/AccompanyStackSection";
import { HeroSection } from "../../components/hero-section/HeroSection";
import { TechStackSection } from "../../components/tech-stack-section/TechStackSection";
import { WorkExperience } from "../../components/work-experience/WorkExperience";
import "./homepage.scss";
import SEO from "../../components/seo-component/SEO";
import { useEffect } from "react";

export const HomePage = WithTransition(({setContentLoaded}) => {
  
  useEffect(() => {
    setContentLoaded();
  }, [setContentLoaded]);

  return (
    <>
      <SEO />
      <HeroSection />
      <TechStackSection />
      <AccompanyStackSection />
      <WorkExperience />
      <AboutSection />
    </>
  );
});
