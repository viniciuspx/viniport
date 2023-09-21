import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "../assets/css/App.css";

import Home from "./home";
import Header from "./header";

function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<Home></Home>} exact />
      <Route path="/about" element={<></>} exact />
      <Route path="/projects" element={<></>} exact />
    </Routes>
  );

  return (
    <Router>
      <main>
        <div className="main">
          <Header />
          {routes}
        </div>
      </main>
    </Router>
  );
}

export default App;
