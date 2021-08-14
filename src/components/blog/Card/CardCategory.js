import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div`
  display: inline-block;
  background: #009bbb;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 14px;
  // text-transform: uppercase;
  font-weight: 300;
  line-height: 28px;
  margin-right: 10px;
`;

const CardCategory = ({ value }) => (
  <StyledCategory key={value.id} style={{ backgroundColor: `#${value.color}` }}>
    {value.name}
  </StyledCategory>
);

export default CardCategory;