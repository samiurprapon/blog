import React from "react";
import styled from "styled-components";

import LoaderSvg from "./LoaderSvg";

const LoaderContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Loader = () => (
  <LoaderContainer>
    <LoaderSvg fill="#fca326" />
  </LoaderContainer>
);

export default Loader;