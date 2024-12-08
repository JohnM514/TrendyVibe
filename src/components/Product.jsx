import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.div`
  align-items: center;
  background-color: #f5fbfd;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  z-index: 3;
  display: flex;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 10px;
  width: 40px;

  transition: all 0.1s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
