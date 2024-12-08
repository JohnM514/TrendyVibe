import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: gray;
  cursor: pointer;
  padding: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>COMPRA AHORA</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
