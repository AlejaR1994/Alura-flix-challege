import React from "react";
import styled from "styled-components";

const ImagenAlura = styled.img`
  width: 424px;
  height: 247px;

  @media (max-width: 500px) {
    width: 84vw;
    height: 210px;
  }
`;

export const ImageCard = (props) => {
  return (
    <>
      <ImagenAlura
        src={props.urlV}
        alt="Imagen Alura"
        style={{ border: `${props.colorV}` }}
      ></ImagenAlura>
    </>
  );
};
