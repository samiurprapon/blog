import React from "react";
import styled from "styled-components";

const ReadingTime = styled.p`
  color: #b5b5b5;
  font-size: 15px;
  position: absolute;
  top: -10px;
  right: 10px;
`;

const CardReadingTime = ({ time }) => (
  <ReadingTime>{time} Min Read</ReadingTime>
);

export default CardReadingTime;