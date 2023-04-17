import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
