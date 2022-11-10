import { Box, CircularProgress, Container } from "@mui/material";
import React from "react";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import Sidebar from "../../../components/my-account/Sidebar";
import OrderDataTable from "../../../components/dataTable/OrderDataTable";
import { useQuery } from "@apollo/client";
import { getAllOrdersQuery } from "../../../lib/queries";
import BottomPagination from "../../../components/pagination/BottomPagination";
import { useRouter } from "next/router";


const OrderHistory = () => {
  const router = useRouter();


  const { data, loading } = useQuery(getAllOrdersQuery, {
    fetchPolicy: "network-only",
    variables: {
      pageNumber: parseInt(router.query.page, 10) || 1,
    }
  });


  return (
    <div>
      <BreadcrumbsCom breadcrumbs="Order History" />
      <Container sx={{ display: "flex", mb: 5 }}>
        <Sidebar />
        <Box sx={{ mt: 5 }}>
          {loading ? <Box sx={{ textAlign: "center", width: "700px" }}><CircularProgress /></Box> : <>
            <OrderDataTable data={data.orders.data} />
            <BottomPagination pagination={{
              page: data.orders.meta.pagination.page,
              pageCount: data.orders.meta.pagination.pageCount
            }} />
          </>}
        </Box>
      </Container>
    </div>
  );
};

export default OrderHistory;
