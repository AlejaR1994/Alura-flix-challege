import styled from "styled-components";
import { listDataCarrusel } from "../../Api/Apicito";
import { Carrusel } from "../Carrusel";
import { useContext } from "react";
import { DataCarruselContext } from "../../Context";
// import Modal from "../Modal";

const MainContainer = styled.main`
  padding: 30px;
  background-color: #030a1a;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = () => {
  const dataCarrusel = useContext(DataCarruselContext);

  return (
    <>
      <MainContainer>
        {Object.keys(dataCarrusel).map((valor) => (
          <Carrusel data={valor} key={valor} />
        ))}
      </MainContainer>
    </>
  );
};
