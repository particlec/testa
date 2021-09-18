import HomeStyled from "./homeStyled";
import {Tabs,TabPane} from "../../util/tabs";
import PageContent from "./pageContent";

const HomePage = () => {
  return (
    <HomeStyled>
      <div className={"content-main"}>
          <Tabs defaultActiveKey={1} key={1}>
              <TabPane tab="首页" key="1">
                  <PageContent/>
              </TabPane>
              <TabPane tab="存档" key="2">
                  Content of Tab Pane 2
              </TabPane>
              <TabPane tab="关于" key="3">
                  Content of Tab Pane 3
              </TabPane>

          </Tabs>
      </div>
    </HomeStyled>
  );
};

export default HomePage;
