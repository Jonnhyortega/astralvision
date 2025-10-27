import "./App.css";
import Layout from "./components/Layout/Layout";
import AppRoutes from "../src/Routes/Routes";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
function App() {
  return (
    <Layout>
      <Navbar />
      <AppRoutes />
      <Footer />
      <Chatbot />
    </Layout>
  );
}

export default App;
