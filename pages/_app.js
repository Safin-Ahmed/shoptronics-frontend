import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { StoreProvider, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DepartmentSection from "../components/departmentSection/DepartmentSection";
import Footer from "../components/Footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import CustomSnackbar from "../components/snackbar";
import BottomNav from "../components/UI/BottomNavigation";
import Loader from "../components/UI/Loader";
import client from "../lib/apolloClient";
import "../public/Styles/global.css";
import store from "../store";
import { getStorage } from "../utils/storage";

function MyApp({ Component, pageProps }) {
  const [isShow, setIsShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.events]);

  const handleMouseEnter = () => setIsShown(true);

  const handleMouseLeave = () => setIsShown(false);

  useEffect(() => {
    try {
      const authInfo = getStorage("authInfo");
      if (authInfo) {
        store.getActions().auth.setLogin(authInfo);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <CustomSnackbar />
        <CssBaseline>
          <Header
            isShow={isShow}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          <Layout style={{ position: "relative", zIndex: "1" }}>
            {loading && <Loader />}
            <Component {...pageProps} title={"title"} />
            <DepartmentSection
              mouseEnter={handleMouseEnter}
              mouseLeave={handleMouseLeave}
              isShow={isShow}
            />
          </Layout>
          <BottomNav />
          <Footer />
        </CssBaseline>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
