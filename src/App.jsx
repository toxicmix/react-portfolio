import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header} from "./components"
import { HomePage, AboutMe, Portfolio, Contact, Resume} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
          <Header />
          <div className="pt-3 px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
