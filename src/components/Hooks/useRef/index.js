import { useRef } from "react";

const RefTutorial = () =>{
  const inputRef = useRef(null);
  const refClickHandler = () =>{
   console.log(inputRef.current.focus)
  }
  return(
    <>
     <h2>Anit</h2>
     <input placeholder="Type your name ..." ref={inputRef}/>
     <button onClick={refClickHandler}>Click</button>
    </>
  )
}

export default RefTutorial;