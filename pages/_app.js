import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { StoreProvider } from "easy-peasy";
import { useState } from "react";
import DepartmentSection from "../components/departmentSection/DepartmentSection";
import Footer from "../components/Footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import CustomSnackbar from "../components/snackbar";
import client from "../lib/apolloClient";
import "../public/Styles/global.css";
import store from "../store";
import { getStorage } from "../utils/storage";

function MyApp({ Component, pageProps }) {
  const [isShow, setIsShown] = useState(false);

  const handleMouseEnter = () => setIsShown(true);

  const handleMouseLeave = () => setIsShown(false);


  try {
    const authInfo = getStorage('authInfo');
    if (authInfo) {
      store.getActions().auth.setLogin(authInfo)
    }
  } catch (error) {
    console.log('error', error)
  }



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
            <Component {...pageProps} title={"title"} />
            <DepartmentSection
              mouseEnter={handleMouseEnter}
              mouseLeave={handleMouseLeave}
              isShow={isShow}
            />
          </Layout>
          <Footer />
        </CssBaseline>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
