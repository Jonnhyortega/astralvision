import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import Contact from "../pages/Contact/Contact";
import Servicios from "../components/Servicios/Servicios";
import ServiceLanding from "../pages/ServiceLanding/ServiceLanding";
import { pageTransition } from "../lib/motion";
import { scrollToTop } from "../lib/lenis";

const AppRoutes = () => {
  const location = useLocation();

  return (
    // La página nueva arranca arriba recién cuando terminó de salir la anterior.
    <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServiceLanding />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;
