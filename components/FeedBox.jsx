import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => `${props.oneWidth}px` || "0px"};
  min-width: ${(props) => `${props.oneWidth}px` || "0px"};
  height: ${(props) => `${props.oneWidth}px` || "0px"};
  background-color: red;

  border-radius: 3px;
  box-shadow: 0px 0px 3px #999;

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  margin-bottom: 14px;
`;

const FeedBox = ({ feedWidth }) => {
  const [oneWidth, setOneWidth] = useState(0);

  useEffect(() => {
    const fullWidth = parseInt(window.innerWidth);
    const sectionWidth = (fullWidth * parseInt(feedWidth)) / 100;
    setOneWidth((sectionWidth - 40) / 3);
  }, []);

  return <Box oneWidth={oneWidth}></Box>;
};

export default FeedBox;
