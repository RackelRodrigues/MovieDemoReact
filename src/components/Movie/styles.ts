import styled from "styled-components";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const H1 = styled.h1`
  font-family: Raleway;
  font-size: 32px;
  font-weight: 200;
  color: #e8e6e5;
  text-align: center;
  margin: 10px 0 20px 0;
  @media (max-width: 780px) {
    text-align: center;
    font-size: 25px;
  }
`;

const Containername = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgMovie = styled.img`
  width: 180px;
  height: 260px;
  cursor: pointer;
  transition: filter 0.3s;
  z-index: 0;
  &:hover {
    filter: brightness(70%);
  }

  &:hover + button {
    opacity: 1;
  }
`;

const Classification = styled.p`
  font-family: Raleway;
  font-size: 14px;
  font-weight: 200;
  color: #e8e6e5;
`;

const DivFilmes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const ContainerStar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
`;
