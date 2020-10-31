import React, { useEffect, useState } from "react";
import { Input, Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { searchTitle } from "../../redux/action";
import CardSearch from "../CardSearch";

const { Search } = Input;
const SearchTitle = () => {
  const dispatch = useDispatch();

  const searched_title = useSelector((state) => state.posts.search_title);
  const searched = useSelector((state) => state.posts.searched);
  const [hide, setHide] = useState(false);
  const [arrSearch, setArrSearch] = useState([]);

  useEffect(() => {
    if (searched_title && searched_title.length > 0) {
      setArrSearch(searched_title);
    }
  }, [searched_title, searched, hide]);
  const onSearch = (value) => {
    if (value.length > 0) {
      dispatch(searchTitle(value));
      setHide(false);
      setArrSearch([]);
    } else {
      setHide(true);
    }
  };

  const searchMessage = () => {
    if (searched && searched_title.length > 0) {
      return `Found ${searched_title.length} Titles !`;
    }
    if (searched && searched_title.length < 1) {
      return ` No Titles found!`;
    }
  };
  const searchedTitle = () => {
    return (
      <Row>
        <Divider style={{ fontSize: "20px" }} plain>
          {!hide && searchMessage()}
        </Divider>
        <Col span={3}></Col>
        <Col span={18} style={{ display: hide ? "none" : "block" }}>
          {searched &&
            arrSearch.map((card, i) => <CardSearch key={i} card={card} />)}
        </Col>
        <Col span={3}></Col>
      </Row>
    );
  };
  return (
    <>
      <Search
        style={{ width: "800px", margin: "10px auto 0" }}
        placeholder="What's title name want to search?"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div>{searchedTitle()}</div>
    </>
  );
};
export default SearchTitle;
