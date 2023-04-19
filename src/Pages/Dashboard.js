import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import Header from "../Component/Header";
import Grid from "@mui/material/Grid";
import "../CSS/dashboard.css";

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
      <Grid container className="container">
        <Grid item xs={12} md={12} lg={3}>
          Sidebar
        </Grid>
        <Grid item xs={12} md={12} lg={9}>
          <Header />
          <Card />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
