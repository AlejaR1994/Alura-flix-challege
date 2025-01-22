import styled from "styled-components";
import { ImageCard } from "./VideoCard";
import { SliderComponent } from "./SliderComponent";

import { listDataCarrusel } from "../../Api/Apicito";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import deleteIcon from "../../assets/borrar.png";
import editIcon from "../../assets/editar.png";

import { useContext } from "react";
import { DataCarruselContext } from "../../Context";
// const ImagenAlura = styled.img`
//   width: 450px;
//   height: 247px;
// `;

const EspecialidadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  //flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    p {
      margin: 0;
    }
  }
  h1 {
    margin: 0;
    //    background: #6bd1ff;
    border: none;
    border-radius: 3px;
    padding: 12px 22px;
    font-size: 25px;
    @media (max-width: 390px) {
      font-size: 20px;
      width: 50%;
    }
  }
`;

const LinkContainer = styled(Link)`
  width: 424px !important;
  height: 247px !important;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: left;
`;

export const Carrusel = (props) => {
  // const { dataCarrusel } = listDataCarrusel();
  const dataCarrusel = useContext(DataCarruselContext);
  const categoryData = dataCarrusel[props.data] || {};

  return (
    <>
      <EspecialidadContainer>
        <h1 style={{ backgroundColor: `${categoryData.color}` }}>
          {categoryData.formacion}
        </h1>
        <p>{categoryData.formacion}</p>
      </EspecialidadContainer>
      <SliderComponent>
        {categoryData.videos
          ? categoryData.videos.map((video) => (
            <div>
              <LinkContainer key={video.id} to={video.urlVideos}>
                <ImageCard
                  key={video.id}
                  colorV={`2px solid ${categoryData.color}`}
                  urlV={video.urlImagen}
                />
              </LinkContainer>
              <ButtonContainer $color={categoryData.color}>
                <EditButton img={deleteIcon} text="Borrar" action={() => 
                  console.log("Borrar")
                }>
                {/* <EditButton action={deleteVideo} video={video} img={deleteIcon}> */}
                </EditButton>
                <EditButton img={editIcon} text="Editar" action={() => console.log("Editar")}>
                {/* <EditButton action={setSelectedVideo} video={video} img={editIcon}> */}
                </EditButton>
              </ButtonContainer>
              </div>
          ))
          : null}
      </SliderComponent>
      </>
  );
};

