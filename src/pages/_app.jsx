"use client"
import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
