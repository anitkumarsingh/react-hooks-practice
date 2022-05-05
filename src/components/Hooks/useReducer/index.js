import React, { useReducer } from 'react';

const reducer = (state,action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return{count:state.count+1,showText:state.showText}
    case 'TOGGLETEXT':
      return {count:state.count,showText:!state.showText}
    default:
      return state;
  }
}
const Reducer = () => {
  const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
	return (
		<>
			{' '}
			{state.count}
			<button
				onClick={() => {
          dispatch({type:'INCREMENT'});
          dispatch({type:'TOGGLETEXT'})
				}}>
				Click me
			</button>
      <br/>
			{state.showText && 'This is text'}
		</>
	);
};

export default Reducer;
