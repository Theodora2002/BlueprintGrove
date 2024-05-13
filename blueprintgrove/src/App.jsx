import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services";
import OurProject from "./pages/OurProject";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<OurProject />} />
    </Routes>
  );
}

export default App
