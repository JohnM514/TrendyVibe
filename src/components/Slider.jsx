import React, { useState } from "react";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { sliderItems } from "../data";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  background-color: #f7f7f7;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  width: 100vw;
  display: flex;
  background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="Sample Slide" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>COMPRA AHORA</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
