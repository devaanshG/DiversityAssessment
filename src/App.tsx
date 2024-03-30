// Import relevant libraries and React components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Why from "./pages/Why.tsx";
import How from "./pages/How.tsx";
import Careers from "./pages/Careers.tsx";
import NoPage from "./pages/NoPage.tsx";
// Import css
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* Adds the Router object, which allows the website to go to different routes (pages) */}
        <BrowserRouter>
          {/* Container object for the individual routes */}
          <Routes>
            {/* Individual Routes, eacch pointing to a React component */}
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/why" element={<Why />} />
            <Route path="/how" element={<How />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
