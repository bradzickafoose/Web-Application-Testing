import React from 'react';
import '../App.css';

export default function Display(props) {
	console.log('Display:', props);
	return (
		<div className='display'>
			<div className='display-count'>
				<div className='display-title'>Ball</div>
				<div className='display-num'>{props.balls}</div>
			</div>
			<div className='display-count'>
				<div className='display-title'>Strike</div>
				<div className='display-num'>{props.strikes}</div>
			</div>
		</div>
	);
}
