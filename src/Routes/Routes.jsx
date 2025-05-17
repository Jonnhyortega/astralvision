import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import Contact from "../pages/Contact/Contact";
import Servicios from "../components/Servicios/Servicios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Servicios />} />
    </Routes>
  );
};

export default AppRoutes;
