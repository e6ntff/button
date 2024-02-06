import React, { useCallback } from 'react';
import Button from './components/Button';

const App: React.FC = () => {
	const getRandomColor = useCallback(() => {
		const [r, g, b] = [
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
		];

		return `rgb(${r}, ${g}, ${b})`;
	}, []);

	return <Button getRandomColor={getRandomColor} />;
};

export default App;
