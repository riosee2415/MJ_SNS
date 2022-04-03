import React, { useState } from "react";
import { Wrapper } from "../utils/globalComponents";
import styled from "styled-components";
import { Form, Input } from "antd";
import FeedBox from "../components/FeedBox";

const SearchWrapper = styled(Wrapper)`
  box-shadow: 2px 2px 10px 2px #d7d7d7;
  padding: 0px 15px;
`;

const ProjectTitle = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 0px;
  font-weight: 700;
`;

const SearchInput = styled(Input)`
  width: 250px;
  height: 27px;
  border-radius: 5px;
`;

const FeedWrapper = styled(Wrapper)`
  margin-top: 200px;
  flex-wrap: wrap;
`;

const App = () => {
  const [feedWidth, setFeedWidth] = useState(65);

  return (
    <Wrapper height="100vh" dr="row">
      {/* LEFT FEED SECITON */}
      <Wrapper width={`${feedWidth}%`} ju="flex-start">
        <SearchWrapper dr="row" height="55px" ju="space-between">
          <ProjectTitle>MJ Social</ProjectTitle>

          <Form>
            <SearchInput allowClear placeholder="검색어를 입력하세요." />
          </Form>
        </SearchWrapper>

        <FeedWrapper dr="row" ju="space-around">
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
          <FeedBox feedWidth={feedWidth} />
        </FeedWrapper>
      </Wrapper>

      <Wrapper width={`calc(100% - ${feedWidth}%)`}>
        {/* MY INFO SECTON */}
        <Wrapper height="35%" bg="lightGrey"></Wrapper>

        {/* FOLLOWERS SECTION */}
        <Wrapper height="65%" bg="skyblue"></Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default App;
