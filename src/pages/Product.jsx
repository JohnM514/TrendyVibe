import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
	padding: 50px;
	${mobile({padding:"10px" ,flexDirection: "column"})}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	height: 90vh;
	object-fit: cover;
	width: 100%;
	${mobile({ height: "40vh", width: "95%"})}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0px;
	width: 50%;
	${mobile({ width: "100%"})}
`;

const Filter = styled.div`
	align-items: center;
	display: flex;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	background-color: ${(props) => props.color};
	border-radius: 50%;
	cursor: pointer;
	height: 20px;
	margin: 0px 5px;
	width: 20px;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 50%;
	${mobile({ width: "100%"})}
`;

const AmountContainer = styled.div`
	align-items: center;
	display: flex;
	font-weight: 700;
`;

const Amount = styled.span`
    align-items: center;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    height: 30px;
    justify-content: center;
    margin: 0px 5px;
    width: 30px;
`;

const Button = styled.button`
    padding: 15px;
    border:  1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #F8F4F4;
    }
`;

const Product = () => {
	return (
		<Container>
			<Announcements />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src="/images/products/denimJean.webp" />
				</ImgContainer>
				<InfoContainer>
					<Title>Pantalon</Title>
					<Desc>
						Descubre el equilibrio perfecto entre estilo y comodidad
						con nuestros jeans diseñados para cada ocasión.
						Fabricados con materiales de alta calidad, ofrecen un
						ajuste impecable que realza tu figura mientras te
						mantiene cómodo todo el día.
					</Desc>
					<Price>Lps. 300</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black"></FilterColor>
							<FilterColor color="darkblue"></FilterColor>
							<FilterColor color="gray"></FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>Tamaño</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon />
							<Amount>1</Amount>
							<AddIcon />
						</AmountContainer>
						<Button>AGREGAR AL CARRITO</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
