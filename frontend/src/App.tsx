import React from "react";
// import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import MyComponent from "./components/Test/Test";
import Calendar from "./components/Test/Calendar";



function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Contactus />} /> */}
       
      </Routes>
    </Router>
  );
}

export default App;
