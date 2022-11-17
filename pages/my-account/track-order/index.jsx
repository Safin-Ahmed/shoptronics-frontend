import { Box, CircularProgress, Container } from "@mui/material";
import React, { useEffect } from "react";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import Sidebar from "../../../components/my-account/Sidebar";
import OrderDataTable from "../../../components/dataTable/OrderDataTable";
import { useQuery } from "@apollo/client";
import { getAllOrdersQuery } from "../../../lib/queries";
import BottomPagination from "../../../components/pagination/BottomPagination";
import { useRouter } from "next/router";
import Head from "next/head";
import { useStoreState } from "easy-peasy";

const OrderTracking = () => {
  const router = useRouter();

  const { data, loading } = useQuery(getAllOrdersQuery, {
    fetchPolicy: "network-only",
    variables: {
      pageNumber: parseInt(router.query.page, 10) || 1,
    },
  });

  const auth = useStoreState((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login", undefined, { shallow: true });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Shoptronics - Track Your Order</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Track Your Order with Shoptronics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbsCom breadcrumbs="Order History" />
      <Container sx={{ display: "flex", mb: 5 }}>
        <Sidebar />
        <Box sx={{ mt: 5 }}>
          {loading ? (
            <Box sx={{ textAlign: "center", width: "700px" }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <OrderDataTable data={data.orders.data} />
              <BottomPagination
                pagination={{
                  page: data.orders.meta.pagination.page,
                  pageCount: data.orders.meta.pagination.pageCount,
                }}
              />
            </>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default OrderTracking;
