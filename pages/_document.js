import Document, { Html,Head, Main, NextScript } from 'next/document'

class Mydocument  extends Document{
  render(){
    return(
      <Html lang='en'>
        <Head>
        <link href="../public/fonts/Rubik-Black.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        <link href="../public/fonts/Rubik-Bold.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        <link href="../public/fonts/Rubik-Light.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        <link href="../public/fonts/Rubik-Medium.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        <link href="../public/fonts/Rubik-Regular.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        <link href="../public/fonts/Rubik-SemiBold.ttf" rel="preload" as="font" crossOrigin='anonymus'/>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default Mydocument