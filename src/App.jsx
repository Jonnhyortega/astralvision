import "./App.css";
import Layout from "./components/Layout/Layout";
import AppRoutes from "../src/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Layout>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Layout>
  );
}

export default App;
