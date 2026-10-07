import { useState, useEffect, Suspense, lazy } from "react";
import { MotionConfig } from "framer-motion";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AppRoutes from "../src/Routes/Routes";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import { initLenis, destroyLenis } from "./lib/lenis";

const Chatbot = lazy(() => import("./components/Chatbot/Chatbot"));
import MetaPixel from "./components/MetaPixel/MetaPixel";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => setIsChatOpen((prev) => !prev);

  useEffect(() => {
    initLenis();
    return destroyLenis;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <ScrollProgress />
        <Navbar onOpenChat={toggleChat} />
        <AppRoutes />
        <Footer />
        <MetaPixel />
        <Suspense fallback={null}>
          <Chatbot chatOpen={isChatOpen} toggleChat={toggleChat} />
        </Suspense>
      </Layout>
    </MotionConfig>
  );
}

export default App;
