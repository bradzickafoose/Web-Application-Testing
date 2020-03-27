import React from 'react';
import '../App.css';

export default function Dashboard(props) {
	console.log('Dashboard:', props);
	return (
		<div className='dashboard'>
			<button onClick={() => props.strikechange()}>Strike</button>
			<button onClick={() => props.ballchange()}>Ball</button>
			<button onClick={() => props.foulchange()}>Foul</button>
			<button onClick={() => props.hitchange()}>Hit</button>
		</div>
	);
}
