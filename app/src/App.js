import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Baseball Score Board</h1>
			</header>
			<Dashboard />
		</div>
	);
}

export default App;
