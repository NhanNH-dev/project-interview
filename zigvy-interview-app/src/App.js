import React from "react";
import { Layout, message } from "antd";
import Post from "./components/Post";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import SearchTitle from "./components/SearchTitle";

function App() {
  const show = useSelector((state) => state.posts.show);
  const messages = useSelector((state) => state.posts.message);

  const showMessage = () => {
    message.success(
      "Successfully!",
      2
    );
  };
  return (
    <Layout>
      {show && showMessage()}
      <Layout style={{ minHeight: "60vh" }}>
        <SearchTitle />
        <Post />
      </Layout>
    </Layout>
  );
}

export default App;
