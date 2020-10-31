import React from "react";
import { Button, Card, Tag } from "antd";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
const CardSearch = ({ card }) => {
  const { id, title, comments } = card;
  const author = comments[0].email.slice(comments[0].email.indexOf("@") + 1);
  return (
    <Card
      headStyle={{ textAlign: "center" }}
      title={`Post Name ${id}`}
      style={{ width: " 100% ", background: 'darkseagreen' }}
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
    </Card>
  );
};
export default CardSearch;
