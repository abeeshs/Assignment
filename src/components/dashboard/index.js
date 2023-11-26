import { Box } from "@mui/material";
import React from "react";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

function Dashboard() {
   return (
      <Box height="100vh" bgcolor="black"  display="flex">
         <Sidebar />
         <MainSection />
      </Box>
   );
}

export default Dashboard;
