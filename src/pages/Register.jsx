import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
	align-items: center;
	background-color: #fcf1ed;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`;

const Wrapper = styled.div`
	background-color: white;
	padding: 20px;
	width: 40%;
	${mobile({ width: "70%" })}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	padding: 10px;
	margin: 20px 10px 0px 0px;
	min-width: 40%;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	cursor: pointer;
	color: white;
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREA UNA CUENTA</Title>
				<Form>
					<Input placeholder="Nombre" />
					<Input placeholder="Apellido" />
					<Input placeholder="Usuario" />
					<Input placeholder="Correo" />
					<Input placeholder="Contraseña" />
					<Input placeholder="Confirmar contraseña" />
					<Agreement>
						Al crear una cuenta, consiento el procesamiento de mis
						datos personales de acuerdo con la{" "}
						<b>POLÍTICA DE PRIVACIDAD</b>
					</Agreement>
					<Button>CREAR</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
