import React from 'react';
import {
	Container,
	Content,
	CardContent,
	CardFooter,
	Card,
	CardHeader,
	Title,
	Annotention,
	Description
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '~/components/Header/Header';
import Tabs from '~/components/Tabs/Tabs';
import Menu from '~/components/Menu/Menu';

function App() {
	let offset = 0;
	const translateY = new Animated.Value(0);

	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY
				}
			}
		],
		{
			useNativeDriver: true
		}
	);

	function onHandlerStateChange(event) {
		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false;
			const { translationY } = event.nativeEvent;

			offset += translationY;

			if (translationY >= 140) {
				opened = true;
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true
			}).start(() => {
				offset = opened ? 380 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});
		}
	}

	return (
		<Container>
			<Header />
			<Content>
				<Menu translateY={translateY} />
				<PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
					<Card
						style={{
							transform: [
								{
									translateY: translateY.interpolate({
										inputRange: [ -300, 0, 380 ],
										outputRange: [ 0, 0, 380 ],
										extrapolate: 'clamp'
									})
								}
							]
						}}
					>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponivel</Title>
							<Description>R$ 199,00</Description>
						</CardContent>
						<CardFooter>
							<Annotention>Compra realizada no Supermecados da Vila as 17:28h</Annotention>
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Content>
			<Tabs translateY={translateY} />
		</Container>
	);
}

export default App;
