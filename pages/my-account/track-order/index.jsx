import { Box, Container } from "@mui/material";
import React from "react";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import Sidebar from "../../../components/my-account/Sidebar";
import { getAllOrders } from "../../../api/api";
import { useEffect } from "react";
import { useState } from "react";
import OrderDataTable from "../../../components/dataTable/OrderDataTable";





const TrackOrder = () => {
  const [data, setData] = useState([])


  const fetchData = async () => {
    const response = await getAllOrders();
    setData(response);
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <BreadcrumbsCom breadcrumbs="Track Order" />
      <Container sx={{ display: "flex", mb: 5 }}>
        <Sidebar />
        <Box sx={{mt: 5}}>
          <OrderDataTable data={data} />
        </Box>
      </Container>
    </div>
  );
};


export default TrackOrder;