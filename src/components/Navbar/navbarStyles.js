import styled from "styled-components";

export const ContainerNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  background-color: orange;
  opacity: 0.9;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    margin: 0 30px;
  }
`;

export const ContainerLink = styled.div`
  margin-right: 30px;

  a {
    padding: 5px 15px;

    color: #fff;
    font-size: 20px;
    font-weight: 600;

    text-transform: uppercase;
    text-decoration: none;
  }

  a {
    padding: 20px !important;

    font-size: 20px;

    position: relative;
    text-decoration: none;

    color: #fff;

    //Iphone12
    @media (max-width: 400px) {
      font-size: 18px;
    }

    &:active {
      opacity: 0.5;
    }

    .icon {
      margin-bottom: 5px;
    }
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;
