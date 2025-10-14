import { AnimatePresence } from "motion/react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router";
import aboutImg from "./assets/images/about.webp";
import heading from "./assets/images/heading.webp";
import projects from "./assets/images/projects.webp";
import work_experience from "./assets/images/work_experience.webp";
import { ScrollContext } from "./context/ScrollContext";
import { HomePage } from "./pages/home-page/HomePage";
import { ProjectsPage } from "./pages/projects-page/ProjectsPage";
import { SingleProjectPage } from "./pages/single-project-page/SingleProjectPage";
import { SingleWorkExperiencePage } from "./pages/single-work-experience-page/SingleWorkExperiencePage";
import { WorkExperiencePage } from "./pages/work-experience-page/WorkExperiencePage";

function App() {
  const location = useLocation();
  const { lenis } = useContext(ScrollContext);

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
          lenis.current.scrollTo(0, { immediate: true });
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<HomePage key="home_page" scrollY={scrollY} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage key="projects_page" scrollY={scrollY} />}
          />
          <Route
            path="/projects/:name"
            element={
              <SingleProjectPage key="single_project_page" scrollY={scrollY} />
            }
          />
          <Route
            path="/work-experience"
            element={
              <WorkExperiencePage
                key="work_experience_page"
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/work-experience/:name"
            element={
              <SingleWorkExperiencePage
                key="single_work_experience_page"
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="*"
            element={<HomePage key="home_page" scrollY={scrollY} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
