import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

export const addPoint = (currentPoint) => {
	return currentPoint;
};

function App() {
	const [ ballState, setBallState ] = useState(0);
	const [ strikeState, setStrikeState ] = useState(0);

	const ballChange = () => {
		if (ballState === 4) {
			setBallState(0);
			setStrikeState(0);
		} else {
			setBallState(addPoint(ballState));
		}
	};

	const strikeChange = () => {
		if (strikeState === 3) {
			setBallState(0);
			setStrikeState(0);
		} else {
			setStrikeState(addPoint(strikeState));
		}
	};

	const foulChange = () => {
		if (strikeState < 2) {
			setStrikeState(addPoint(strikeState));
		}
	};

	const hitChange = () => {
		setBallState(0);
		setStrikeState(0);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Baseball Score Board</h1>
			</header>
			<Display balls={ballState} strikes={strikeState} />
			<Dashboard ballchange={ballChange} strikechange={strikeChange} foulchange={foulChange} hitchange={hitChange} />
		</div>
	);
}

export default App;
