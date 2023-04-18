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

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "Total Revenue",
      number: "$2,129,430",
      icon: "",
    },
    {
      title: "Total Transactions",
      number: "1520",
      icon: "",
    },
    {
      title: "Total Likes",
      number: "9721",
      icon: "",
    },
    {
      title: "Total Users",
      number: "892",
      icon: "",
    },
  ];

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
      <div className="container">
        <Grid container>
          <Grid item xs={12} md={12} lg={2.3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={12} lg={9.7}>
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
      </div>
    </>
  );
};

export default Dashboard;
