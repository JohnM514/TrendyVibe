import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  padding-right: 20px;
  ${mobile({ marginBottom: "10px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TrendyVibe</Logo>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <XIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Utiles</Title>
        <List>
          <ListItem>Pagina Principal</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Femenina</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Rastreo de Orden</ListItem>
          <ListItem>Lista de Deseos</ListItem>
          <ListItem>Terminos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contactanos</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/> Aviación 345, Los Próceres, San Pedro Sula
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +504 3123 4567
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:"10px"}}/> contacto@trendyvibe.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
