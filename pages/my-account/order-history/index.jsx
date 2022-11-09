import { Box, Container } from "@mui/material";
import React from "react";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import Sidebar from "../../../components/my-account/Sidebar";
import { getAllOrders } from "../../../api/api";
import { useEffect } from "react";
import { useState } from "react";
import OrderDataTable from "../../../components/dataTable/OrderDataTable";
import { useQuery } from "@apollo/client";
import { getAllOrdersQuery } from "../../../lib/queries";

const OrderHistory = () => {
  const { data, loading, error } = useQuery(getAllOrdersQuery, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <BreadcrumbsCom breadcrumbs="Order History" />
      <Container sx={{ display: "flex", mb: 5 }}>
        <Sidebar />
        <Box sx={{ mt: 5 }}>
          <OrderDataTable data={data.orders.data} />
        </Box>
      </Container>
    </div>
  );
};

export default OrderHistory;
