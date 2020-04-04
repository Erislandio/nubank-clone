import React from 'react';
import QrCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutText } from './styles.js';

export default function Menu({ translateY }) {
	return (
		<Container
			style={{
				opacity: translateY.interpolate({
					inputRange: [ 0, 300 ],
					outputRange: [ 0, 1 ]
				})
			}}
		>
			<Code>
				<QrCode
					value="https://www.linkedin.com/in/erislandio-soares-a08816141/"
					size={80}
					color="#8b10ae"
					logoBackgroundColor="#fff"
				/>
			</Code>
			<Nav>
				<NavItem>
					<Icon name="help-outline" size={20} color="#fff" />
					<NavText>Me ajuda</NavText>
				</NavItem>
				<NavItem>
					<Icon name="person-outline" size={20} color="#fff" />
					<NavText>Perfil</NavText>
				</NavItem>
				<NavItem>
					<Icon name="credit-card" size={20} color="#fff" />
					<NavText>Configurar Cartão</NavText>
				</NavItem>
				<NavItem>
					<Icon name="smartphone" size={20} color="#fff" />
					<NavText>Configurações do App</NavText>
				</NavItem>
			</Nav>
			<SignOutButton onPress={() => {}}>
				<SignOutText>SAIR DO APP</SignOutText>
			</SignOutButton>
		</Container>
	);
}
