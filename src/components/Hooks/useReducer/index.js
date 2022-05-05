import React, { useState } from 'react';

const Reducer = () => {
	const [count, setCount] = useState(0);
	const [text, showText] = useState(true);
	return (
		<>
			{' '}
			{count}
			<button
				onClick={() => {
					setCount(count + 1);
					showText(!text);
				}}>
				Click me
			</button>
      <br/>
			{text && 'This is text'}
		</>
	);
};

export default Reducer;
