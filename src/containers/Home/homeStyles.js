import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;

  color: #fff;
  background-color: #000;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${Background});
  background-size: 100%;
  background-repeat: no-repeat;

  h1 {
    font-size: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
  }
`;
