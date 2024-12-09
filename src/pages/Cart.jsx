import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
	${mobile({ width: "75%", padding: "20px 5%", margin: "5%" })}
`;

const BottomButton = styled.button``;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
	display: flex;
	flex: 2;
`;

const Image = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	${mobile({ flexDirection: "row", justifyContent: "space-between", width: "85%", padding: "5px" })}
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	${mobile({ marginBottom: "0px" })}
`;

const ProductAmount = styled.span`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.span`
	font-size: 30px;
	font-weight: 200;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	display: flex;
	margin: 30px 0px;
	justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
	${mobile({ flexDirection: "column" })}
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Title>SU CARRITO</Title>
				<Top>
					<TopButton>SEGUIR COMPRANDO</TopButton>
					<TopTexts>
						<TopText>Tu Pedido(2)</TopText>
						<TopText>Lista de Deseos(0)</TopText>
					</TopTexts>
					<TopButton type="filled">PAGAR</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetails>
								<Image src="/images/products/zapatos1.jpg" />
								<Details>
									<ProductName>
										<b>Producto: </b>Botas Moc Toe
									</ProductName>
									<ProductId>
										<b>ID: </b>
										556435541
									</ProductId>
									<ProductColor color="brown" />
									<ProductSize>
										<b>Tamaño: </b>37
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetail>
								<ProductAmountContainer>
									<RemoveIcon />
									<ProductAmount>2</ProductAmount>
									<AddIcon />
								</ProductAmountContainer>
								<ProductPrice>Lps. 450</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr></Hr>
						<Product>
							<ProductDetails>
								<Image src="/images/products/greaytShirt.jpg" />
								<Details>
									<ProductName>
										<b>Producto: </b>Camisa
									</ProductName>
									<ProductId>
										<b>ID: </b>
										576535581
									</ProductId>
									<ProductColor color="gray" />
									<ProductSize>
										<b>Tamaño: </b>37
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetail>
								<ProductAmountContainer>
									<RemoveIcon />
									<ProductAmount>1</ProductAmount>
									<AddIcon />
								</ProductAmountContainer>
								<ProductPrice>Lps. 150</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Resumen del Pedido</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>Lps. 600</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Costo de Envío Estimado
							</SummaryItemText>
							<SummaryItemPrice>Lps. 120</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Descuento de Envío
							</SummaryItemText>
							<SummaryItemPrice>- Lps. 100</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>
								Total
							</SummaryItemText>
							<SummaryItemPrice>Lps. 620</SummaryItemPrice>
						</SummaryItem>
						<Button>PAGAR</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
