import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";

function App() {

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    {/* ----------------- loading animation component is here ----------------- */}
      {isLoading ? <Loading /> :
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
     }
    </>
  );
}

export default App;
