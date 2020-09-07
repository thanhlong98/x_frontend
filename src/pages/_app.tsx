import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { useApollo } from "../libs/apolloClient";
import "../styles/global.css";
import Layout from "../components/Layout";

// handle show progress bar
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
