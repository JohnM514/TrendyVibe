import React from 'react'
import styled from 'styled-components'
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
	width: 25%;
	${mobile({ width: "70%" })}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
    flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	padding: 10px;
	margin: 10px 0px;
	min-width: 40%;
`;

const Button = styled.button`
	cursor: pointer;
	color: white;
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
`;

const Link = styled.a`
    cursor: pointer;
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
			<Wrapper>
				<Title>INICIAR SESION</Title>
				<Form>
					<Input placeholder="Usuario" />
					<Input placeholder="Contraseña" />
					<Button>ACCEDER</Button>
                    <Link>¿Olvidaste tu contraseña?</Link>
                    <Link>Crear una nueva cuenta</Link>
				</Form>
			</Wrapper>
		</Container>
  )
}

export default Login