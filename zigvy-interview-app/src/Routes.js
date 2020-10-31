import Home from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Page404 from "./components/NotFoundPage/Page404";
import MenuHeader from "./components/MenuHeader";
import DetailPost from "./components/DetailPost";
import createNewPost from "./components/CreateNewPost";
import "./styles.scss";

const { Header, Footer } = Layout;
const Routes = () => {
  return (
    <BrowserRouter>
      <Header className="set_padding_header">
        <MenuHeader />
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={createNewPost} />
        <Route path="/detail" exact component={DetailPost} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer className='footer'>
        Ant Design ©2020 Created by Nguyen Huu Nhan
      </Footer>
    </BrowserRouter>
  );
};
export default Routes;
