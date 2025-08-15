import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.jsx";
import AboutPage from "./Page/AboutPage.jsx";
import './index.css'
import Resume from "./Page/Resume.page.jsx";
import {PortFolio} from "./Page/PortFolio.page.jsx";
import Contact from "./Page/Contact.page.jsx";
import HomeComponent from "./Components/Home.component.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="h-screen bg-[#121212]">
      <Toaster/>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route index path="about-me" element={<AboutPage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<PortFolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </div>
  );
}