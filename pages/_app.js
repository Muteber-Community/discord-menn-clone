import "@/styles/globals.css";
import "@/styles/me/me.css";
import "@/styles/channelsPage/channelPage.css";
import Layout from "@/components/Layout";
import {useRouter} from "next/router"

function MyApp({ Component, pageProps }) {
  const Router = useRouter()
  return (
    Router.pathname == "/" || Router.pathname == "/_error"  ?
    <Component {...pageProps} /> :
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
