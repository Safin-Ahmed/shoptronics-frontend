import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import DepartmentSection from '../components/departmentSection/DepartmentSection';
import Footer from '../components/Footer';
import Header from '../components/header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [isShow, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };
  return (
    <>
      <CssBaseline>
        <Header
          isShow={isShow}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <Layout style={{ position: 'relative', zIndex: '1' }}>
          <Component {...pageProps} title={'title'} />
          <DepartmentSection
            mouseEnter={handleMouseEnter}
            mouseLeave={handleMouseLeave}
            isShow={isShow}
          />
        </Layout>
        <Footer />
      </CssBaseline>
    </>
  );
}

export default MyApp;
