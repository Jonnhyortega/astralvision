import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import NoPage from "../pages/NoPage/NoPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
