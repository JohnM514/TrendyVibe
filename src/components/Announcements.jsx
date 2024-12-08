import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: teal;
  color: white;
  display: flex;
  height: 30px;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
  
`;

const Announcements = () => {
  return (
    <Container>
        Super Ofertas!
    </Container>
);
};

export default Announcements;
