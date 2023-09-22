import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/css/App.css";

import Home from "./home";
import Header from "./header";
import About from "./about";
import Projects from "./projects";

function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/projects" element={<Projects />} exact />
    </Routes>
  );

  return (
    <main>
      <div className="main">
        <Header />
        <Router basename="/">{routes}</Router>
      </div>
    </main>
  );
}

export default App;
