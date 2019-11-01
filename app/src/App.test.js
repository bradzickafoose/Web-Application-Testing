import React from 'react';
import App, { addPoint } from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
	const div = document.createElement('div');
	render(<App />);
});

test('strikes displays', () => {
	const container = render(<App />);
	container.getByText(/strikes/i);
});

test('adds 1 point to display', () => {
	expect(addPoint(0)).toBe(1);
});
