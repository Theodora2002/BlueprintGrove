import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services";
import OurProject from "./pages/OurProject";
import The404 from "./pages/404";
import Pricing from "./pages/pricing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<OurProject />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<The404 />}/>
    </Routes>
  );
}

export default App
