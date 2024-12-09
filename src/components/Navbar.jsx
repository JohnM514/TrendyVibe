import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	${mobile({ paddingLeft: "5px" })}
`;

const Left = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	${mobile({ display: "none" })}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
	flex: 1;
	align-items: center;
	display: flex;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
	font-size: 14;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	align-items: center;
	display: flex;
	margin-left: 25px;
	padding: 5px;
	${mobile({ display: "none" })}
`;

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	margin-left: 25px;
	cursor: pointer;
	text-decoration: none;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>ES</Language>
					<SearchContainer>
						<Input placeholder="Buscar" />
						<SearchIcon sx={{ color: "gray", fontSize: 14 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link to="/" style={{ textDecoration: "none",  color: "inherit"}}>
							TrendyVibe
						</Link>
					</Logo>
				</Center>
				<Right>
					<MenuItem>
						<Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
							REGISTRARSE
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
							INICIAR SESION
						</Link>
					</MenuItem>
					<MenuItem>
						<Badge badgeContent={2} color="secondary">
							<Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
								<ShoppingCartOutlinedIcon />
							</Link>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
