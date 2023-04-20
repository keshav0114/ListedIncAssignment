import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import ActivitiesCard from "../Components/ActivitiesCard";
import Header from "../Components/Header";
import Schedule from "../Components/Schedule";
import TopProduct from "../Components/TopProduct";
import Grid from "@mui/material/Grid";
import "../CSS/dashboard.css";

const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <Grid container className="container">
        <Grid item xs={12} md={12} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={12} lg={9}>
          <Header />
          <Card />
          <ActivitiesCard />
          <Grid container spacing={5}>
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
