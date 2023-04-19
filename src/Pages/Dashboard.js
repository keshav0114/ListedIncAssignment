import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/dashboard.css";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import ActivitiesCard from "../Components/ActivitiesCard";
import Header from "../Components/Header";
import Schedule from "../Components/Schedule";
import TopProduct from "../Components/TopProduct";
import Grid from "@mui/material/Grid";
// import Grid from "@mui/material/Unstable_Grid2";

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
        <Grid item xs={12} md={12} lg={2.7}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={12} lg={9.3}>
          <Header />
          <Card />
          <ActivitiesCard />
          <Grid container>
            <Grid item xs={12} md={6}>
              <TopProduct />
            </Grid>
            <Grid item xs={12} md={6}>
              <Schedule />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
