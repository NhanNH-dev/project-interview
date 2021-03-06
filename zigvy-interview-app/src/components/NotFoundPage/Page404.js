import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Page404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button>
        <Link to="/">Back Home</Link>{" "}
      </Button>
    }
  />
);

export default Page404;
