import Lenis from "lenis";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { HomePage } from "./pages/home-page/HomePage";
import { ProjectsPage } from "./pages/projects-page/ProjectsPage";
import { WorkExperiencePage } from "./pages/work-experience-page/WorkExperiencePage";
import { SingleWorkExperiencePage } from "./pages/single-work-experience-page/SingleWorkExperiencePage";
import { SingleProjectPage } from "./pages/single-project-page/SingleProjectPage";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {
      setDirection(e.direction);
    });

    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
    }, 1200);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<HomePage key="home_page" scrollDirection={direction} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage key="projects_page" scrollDirection={direction} />
            }
          />
          <Route
            path="/projects/:name"
            element={
              <SingleProjectPage
                key="single_project_page"
                scrollDirection={direction}
              />
            }
          />
          <Route
            path="/work-experience"
            element={
              <WorkExperiencePage
                key="work_experience_page"
                scrollDirection={direction}
              />
            }
          />
          <Route
            path="/work-experience/:name"
            element={
              <SingleWorkExperiencePage
                key="single_work_experience_page"
                scrollDirection={direction}
              />
            }
          />
          <Route
            path="*"
            element={<HomePage key="home_page" scrollDirection={direction} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
