"use client"
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.min.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/Layout";
// JavaScript
export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
