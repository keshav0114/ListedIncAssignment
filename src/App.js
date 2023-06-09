import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn user={user} setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setUser={setUser} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
