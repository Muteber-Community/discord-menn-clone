import "@/styles/globals.css";
import "@/styles/me/me.css";
import "@/styles/channelsPage/channelPage.css";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
