import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import theme from "../theme/";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Convert pathname (e.g. /privacy-policy) to page title (e.g. Privacy Policy)
  const pageName = router.pathname
    .substring(1)
    .replaceAll("-", " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  const pageTitle = `${pageName || "Home"} - Auxcube`;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
