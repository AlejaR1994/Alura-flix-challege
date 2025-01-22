import styled from "styled-components";

const ButtonStyles = styled.button`
  height: 28px;
  display: flex;
  gap: 20px;
  background: none;
  border: none;
  align-items: center;
  cursor: pointer;
`;

const TextStyles = styled.span`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const EditButton = ({ img, text, action }) => {
  // const EditButton = ({ img, children, video, action }) => {
  return (
    <ButtonStyles
      onClick={() => action()}
    >
      <img src={img} alt={text} />
      <TextStyles>{text}</TextStyles>
    </ButtonStyles>
  );
};

export default EditButton;
