import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-Black.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-Light.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-Medium.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            
            rel="preconnect"
            href="../public/fonts/Rubik-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
