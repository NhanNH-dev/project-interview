import React, { useState } from "react";
import { Button, Card, Tag } from "antd";
import Comments from "../Comments";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
const CardUSer = ({ id, title, comments, deletes, getDetail }) => {
  const [show, setShow] = useState(false);
  const showComments = () =>
    comments.map((c, i) => <Comments key={i} comments={c} />);

  const author = comments && comments.length >0 && comments[0].email.slice(0, comments[0].email.search("@"));
  return (
    <Card
      headStyle={{ textAlign: "center" }}
      title={`Post Name ${id}`}
      extra={
        <Button onClick={(id) => deletes(id)}>
          <DeleteOutlined />
        </Button>
      }
      style={{ width: " 100% " }}
    >
      <p>
        <Tag style={{ fontSize: "20px" }} color="blue">
          Author
        </Tag>
        : {author}
      </p>
      <p>
        <Tag style={{ fontSize: "20px" }} color="green">
          Created at:
        </Tag>
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      </p>
      <p>
        {" "}
        <Tag style={{ fontSize: "20px" }} color="red">
          Title:
        </Tag>{" "}
        {title.slice(0, 100) + "..."}
      </p>
      <Button onClick={() => setShow(!show)}>
        Have {comments.length} View Comments
      </Button>
      <Link to="/detail">
        <Button onClick={(id) => getDetail(id)}>View Details</Button>
      </Link>
      {show && showComments()}
    </Card>
  );
};
export default CardUSer;
