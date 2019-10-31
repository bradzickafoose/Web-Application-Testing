import React from 'react';
import '../App.css';

export default function Dashboard(props) {
	return (
		<div className='dashboard'>
			<button>Strike</button>
			<button onClick={() => props.ballchange()}>Ball</button>
			<button>Foul</button>
			<button>Hit</button>
		</div>
	);
}
