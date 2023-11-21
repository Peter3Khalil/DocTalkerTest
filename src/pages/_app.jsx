"use client"
import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/Layout";
import { useEffect } from "react";
// JavaScript
export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.webkitRequestFullscreen();
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
