import "./App.scss";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";

import Home from "./components/pages/Home";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true,
    });
  }, []);  

  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
