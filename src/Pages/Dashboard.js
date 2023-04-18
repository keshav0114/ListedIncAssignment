import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const signout = () => {
    setUser({});
  };
  useEffect(() => {
    if (Object.keys(user).length == 0) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <button onClick={signout}>Sign out</button>
    </>
  );
};

export default Dashboard;
