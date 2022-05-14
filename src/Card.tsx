import React from "react"
import {Wrapper, Title} from "./styles"




export function Card(props) {
  const { index } = props;

  return (
    <Wrapper>
      <Title>{index + 1}</Title>
    </Wrapper>
  );
}

export default Card;

