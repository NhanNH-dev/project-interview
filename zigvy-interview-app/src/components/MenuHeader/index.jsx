import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import "./styles.scss";
import logo from "../../assets/logo.svg";

const MenuHeader = () => {
  const [current, setCurrent] = useState("mail");
  let history = useHistory();
  function handleClick(e) {
    setCurrent(e.key);
  }
  const clickLogo = () => {
    window.location.reload();
    return;
  };
  const returnHomePage = () => {
    console.log('history', history)
    history.push("/");
  };
  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      className="set_padding_header_menu"
      selectedKeys={current}
      mode="horizontal"
    >
      <Menu.Item key="mail">
        <img src={logo} className="logo" alt="logo" onClick={clickLogo} />
      </Menu.Item>

      <Menu.Item key="app">
        <span onClick={returnHomePage}>Blogs</span>
      </Menu.Item>

      <Menu.Item key="alipay">
        <UserOutlined className="icon_user" />
        Adam Levine
      </Menu.Item>

      <Menu.Item key="shoppingCard">
        <Link to="/create">
          <PlusOutlined />
          <span style={{ fontSize: "15px" }}>Create New Post</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuHeader;
