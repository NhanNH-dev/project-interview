import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Select,
  DatePicker,
  Layout,
  Form,
  Tag,
  Typography,
} from "antd";
import SunEditor from "suneditor-react";
import moment from "moment";
import "suneditor/dist/css/suneditor.min.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../redux/action";
import { EDITOR_METADATA } from "../Constant";
import "./styles.scss";

const { Title } = Typography;
const CreateNewPost = () => {
  const [sunEditor, setSunEditor] = useState("");
  const [articleBodyHtml, setArticleBodyHtml] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const [redirect, setRedirect] = useState(false);
  const handleChangeSunEditor = (content) => {
    setSunEditor(content);
  };

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        history.push("/");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [redirect]);
  const onFinish = (values) => {
    const new_post = { ...values, sunEditor };
    dispatch(createNewPost(new_post));
    setRedirect(true);
  };
  return (
    <Layout>
      <Title className="title_new_post">Creat a New Post</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input />
        </Form.Item>
        <div className="sun_editor">
          <SunEditor
            onChange={handleChangeSunEditor}
            setContents={articleBodyHtml}
            name="body"
            height="300"
            width="70%"
            placeholder="Please type here..."
            setOptions={{
              buttonList: EDITOR_METADATA.buttonList,
            }}
          />
        </div>

        <Form.Item
          label="Select Tag"
          name="tag"
          rules={[{ required: true, message: "Please choose your tag!" }]}
        >
          <Select>
            <Select.Option value="success">
              <Tag color="success">success</Tag>
            </Select.Option>
            <Select.Option value="processing">
              <Tag color="processing">processing</Tag>
            </Select.Option>
            <Select.Option value="error">
              <Tag color="error">error</Tag>
            </Select.Option>
            <Select.Option value="warning">
              <Tag color="warning">warning</Tag>
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Publish Date:"
          name="createdAt"
          rules={[{ required: true, message: "Please select date!" }]}
        >
          <DatePicker
          />
        </Form.Item>
        <Form.Item>
          <Button className="btn_create" type="primary" htmlType="submit" block>
            Create
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default CreateNewPost;
