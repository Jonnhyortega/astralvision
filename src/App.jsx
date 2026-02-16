import { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AppRoutes from "../src/Routes/Routes";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Chatbot = lazy(() => import("./components/Chatbot/Chatbot"));
import MetaPixel from "./components/MetaPixel/MetaPixel";

function App() {
  return (
    <Layout>
      <Navbar />
      <AppRoutes />
      <Footer />
      <MetaPixel />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </Layout>
  );
}

export default App;
