import { HashRouter, Redirect, Switch } from "react-router-dom";
import LayoutA from "../component/layout/layoutA";

const Router = () => {
  return (
    <HashRouter basename={"/blog"}>
      <Switch>
        <LayoutA path="/clz.com" title={"首页"} />
      </Switch>
      <Redirect to="/clz.com" />
    </HashRouter>
  );
};
export default Router;
