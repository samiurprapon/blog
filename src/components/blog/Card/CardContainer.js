import styled from "styled-components";

const CardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 2rem;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 2rem;
  padding-right: 30px;
  padding-left: 20px;
  transition: 0.2s;
  position: relative;

  :hover {
    background-color: ${(props) =>
      props.theme.mode !== "light" ? "#DEDEE1E5" : "#00DEAF"}; //E4E6EB, 00DEAF, 551A8B
  }
`;

export default CardContainer;