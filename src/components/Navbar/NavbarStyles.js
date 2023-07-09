import styled from "styled-components";

export const ContainerNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: #4c4c4c;
  background-color: #ff7b00;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px;

    h1 {
      font-family: "Cinzel Decorative", cursive;
      color: black;
      font-size: 50px;
    }
  }
`;

export const ImageLogo = styled.img`
  width: 150px;
  margin: 10px;
`;

export const Nav = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-size: 15px;

  display: flex;
  align-items: center;
  text-align: center;

  font-size: 20px;
  margin-right: 100px;

  /* ul {
    margin: 20px;
    list-style: none;

    cursor: pointer;
  } */

  a {
    color: #4c4c4c;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px !important;

    font-size: 20px;

    position: relative;
    text-decoration: none;

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
