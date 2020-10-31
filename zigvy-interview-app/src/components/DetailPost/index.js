import React from "react";
import { Table, Row, Col } from "antd";
import { useSelector } from "react-redux";

const DetailPost = () => {
  const post_detail = useSelector((state) => state.posts.post_detail);
  console.log("post_detail", post_detail);
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "stt",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];

  return (
    <>
      <Row>
        <Col span={3}></Col>
        <Col span={18}>
          <Table
            style={{ alignItems: "center", marginTop: '20px' }}
            bordered={true}
            columns={columns}
            dataSource={post_detail}
            pagination={false}
          />
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
};

export default DetailPost;
