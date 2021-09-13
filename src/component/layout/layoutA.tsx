import { Route } from "react-router-dom";
import { Layout } from "antd";
import Head from "../head/head";
import HomePage from "../../router/homePage/homePage";

const { Header, Content, Footer } = Layout;
function LayoutA({ path, title }: { path: string; title: string }) {
  return (
    <Route path={path}>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Head />
        <HomePage />
      </div>
    </Route>
  );
}

export default LayoutA;
