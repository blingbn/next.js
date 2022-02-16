import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Layout from "./Layout";

// css를 위한 것 index.js 파일 보기전에 이 파일을 먼저 봄

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
