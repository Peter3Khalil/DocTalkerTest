
import { Provider } from "react-redux"
import Layout from "../components/Layouts/Layout"
import "../styles/globals.css"
import "prismjs/themes/prism-tomorrow.min.css"
import store from "../redux/store"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
