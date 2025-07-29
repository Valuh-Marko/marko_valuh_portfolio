import Lenis from "lenis";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { HomePage } from "./pages/home-page/HomePage";
import { ProjectsPage } from "./pages/projects-page/ProjectsPage";
import { WorkExperiencePage } from "./pages/work-experience-page/WorkExperiencePage";
import { SingleWorkExperiencePage } from "./pages/single-work-experience-page/SingleWorkExperiencePage";
import { SingleProjectPage } from "./pages/single-project-page/SingleProjectPage";
import { useScrollLock } from "./hooks/useLockScroll";
import { Helmet } from "react-helmet";
import heading from "./assets/images/heading.webp";
import aboutImg from "./assets/images/about.webp";
import projects from "./assets/images/projects.webp";
import work_experience from "./assets/images/work_experience.webp";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState(-1);
  const [scrollY, setScrollY] = useState(0);

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", (e) => {
      setDirection(e.direction);
      setScrollY(e.scroll);
    });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heading} />
        <link rel="preload" as="image" href={aboutImg} />
        <link rel="preload" as="image" href={projects} />
        <link rel="preload" as="image" href={work_experience} />
      </Helmet>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          lenisRef.current?.scrollTo(0, { immediate: true });
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage
                key="home_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                key="projects_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/projects/:name"
            element={
              <SingleProjectPage
                key="single_project_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/work-experience"
            element={
              <WorkExperiencePage
                key="work_experience_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/work-experience/:name"
            element={
              <SingleWorkExperiencePage
                key="single_work_experience_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                key="home_page"
                scrollDirection={direction}
                scrollY={scrollY}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
