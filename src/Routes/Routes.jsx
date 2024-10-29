import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import NoPage from "../pages/NoPage/NoPage";
import ComboPage from "../pages/Combo/ComboPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="projects" element={<elememt** />} /> */}
      <Route path="promocion" element={<ComboPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
