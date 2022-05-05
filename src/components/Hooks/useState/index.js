import React from 'react';

const Counter = () =>{
  let counter =0;
  const increament = () =>{
    counter = counter +1;
    console.log(counter);
  }
  return(
    <>
    <p>{counter} <button onClick={increament}>Increament</button></p>
    </>
  )
}

export default Counter;