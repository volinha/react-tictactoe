import "./App.css";
import styled from "styled-components";
import Item from "./components/Item";

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

function App() {
  return (
    <Wrapper>
      <Board>
        {Array(9).fill(<Item />)}
      </Board>
    </Wrapper>
  );
}

export default App;
