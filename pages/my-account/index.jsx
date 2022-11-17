import { Box, Card, Container, Typography, CardContent } from "@mui/material";
import { useStoreState } from "easy-peasy";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import Sidebar from "../../components/my-account/Sidebar";

const MyAccount = () => {
  const auth = useStoreState((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login", undefined, { shallow: true });
    }
  }, [auth.isAuthenticated, router]);
  return (
    <div>
      <Head>
        <title>Shoptronics - My Account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="User Account Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbsCom breadcrumbs="Dashboard" />
      <Container sx={{ display: "flex", mb: 5 }}>
        <Sidebar />
        <Box sx={{ mt: 5, display: "flex" }}>
          <Card sx={{ minWidth: 275, mx: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Best Selling
              </Typography>
              <Typography variant="h4">100</Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, mx: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Offer
              </Typography>
              <Typography variant="h4">25</Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, mx: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Orders
              </Typography>
              <Typography variant="h4">25k</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default MyAccount;
