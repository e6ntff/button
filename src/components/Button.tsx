import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ background: string }>`
	color: #000;
	font-size: 3rem;
	border: 0.25rem solid #000;
	border-radius: 1rem;
	text-transform: uppercase;
	padding: 1rem;
	font-weight: 700;
	cursor: pointer;
	transition: 0.15s;

	&:hover {
		background: color-mix(
			in srgb,
			${(props) => props.background} 75%,
			#808080 25%
		);
	}

	background: ${(props) => props.background};
`;

interface Props {
	getRandomColor: () => string;
}

const Button: React.FC<Props> = ({ getRandomColor }) => {
	const [color, setColor] = useState<string>('rgb(255, 255, 255)');

	const changeColor = useCallback(() => {
		const newColor = getRandomColor();
		setColor(newColor);
	}, []);

	return (
		<StyledButton
			background={color}
			onClick={changeColor}
		>
			i'm button
		</StyledButton>
	);
};

export default Button;
