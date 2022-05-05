import React,{useState} from 'react';

const Counter = () =>{
  const [counter,setCounter] = useState(0)
  const increament = () =>{
    setCounter(counter+1);
  }
  return(
    <>
    <p>{counter} <button onClick={increament}>Increament</button></p>
    </>
  )
}

export default Counter;