import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  display: inline-grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 8px;

`;

const Item = styled.div`
  display: flex;
  background: #44475a;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.1s ease all;

  &:active{
    background: #DDD;
  }
`;

function App() {
  return (
    <Wrapper>
      <Board>
        <Item>X</Item>
        <Item>O</Item>
        <Item>X</Item>
        <Item>O</Item>
        <Item>X</Item>
        <Item>O</Item>
        <Item>X</Item>
        <Item>O</Item>
        <Item>X</Item>
      </Board>
    </Wrapper>
  );
}

export default App;
