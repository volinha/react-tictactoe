import React from 'react';
import styled from "styled-components";

const Block = styled.div`
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

const Item = () => {
    return (
        <Block>
            
        </Block>
    );
};

export default Item;