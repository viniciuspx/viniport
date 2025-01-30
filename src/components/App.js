import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../assets/css/App.css";

import Home from "./home";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Blog from "./blog";

function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/projects" element={<Projects />} exact />
      <Route path="/blog" element={<Blog />} exact/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <Router>
      <main>
        <Header />
        {routes}
      </main>
    </Router>
  );
}

export default App;
