import React from 'react';
import '../App.css';

export default function Display() {
	return (
		<div className='display'>
			<div className='display-count'>
				<div className='display-title'>Ball</div>
				<div className='display-num'>3</div>
			</div>
			<div className='display-count'>
				<div className='display-title'>Strike</div>
				<div className='display-num'>2</div>
			</div>
		</div>
	);
}
