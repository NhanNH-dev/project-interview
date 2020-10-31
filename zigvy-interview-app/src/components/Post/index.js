import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Row, Col, Skeleton } from "antd";
import { getPosts, deletePost, getPostDetail } from "../../redux/action";
import CartUser from "../CartUser";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const [current, setCurrent] = useState(1);
  const [nextPage, setNextPage] = useState({
    _start: 0,
    _limit: 5,
  });
  const pageSize = 5;

  const onChangePage = (page) => {
    setNextPage({
      _start: (page - 1) * 4,
      _limit: pageSize * page,
    });
    setCurrent(page);
  };
  const list = posts.slice(nextPage._start, nextPage._limit);
  const deletePostById = (id) => {
    dispatch(deletePost(id));
    const timer = setTimeout(() => {
      return window.location.reload();
    }, 2000);
    return () => clearTimeout(timer);
  };
  const getDetailPost = (id) => {
    dispatch(getPostDetail(id));
  };
  return (
    <div>
      {loading && <Skeleton active />}
      <Row>
        <Col span={3}></Col>
        <Col span={18}>
          {list.length > 0 &&
            list.map((l, i) => (
              <CartUser
                key={i}
                title={l.title}
                id={l.id}
                description={l.description}
                comments={l.comments}
                deletes={() => {
                  deletePostById(l.id);
                }}
                getDetail={() => {
                  getDetailPost(l.id);
                }}
              />
            ))}
        </Col>
        <Col span={3}></Col>
      </Row>
      <Pagination
        style={{ textAlign: "center" }}
        current={current}
        onChange={onChangePage}
        total={posts.length}
        defaultPageSize={nextPage._limit}
      />
    </div>
  );
};

export default Post;
