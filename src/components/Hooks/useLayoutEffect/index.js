import React,{useLayoutEffect,useEffect} from 'react';

const LayoutEffect = () =>{
  useLayoutEffect(()=>{
    console.log('anit');
  },[])

  useEffect(()=>{
     console.log('useEffect is called')
  },[])
  return(
    <>
    <p>Layout Effect hook</p>
    <input placeholder='Please enter name' value={'Hello'} />
    </>
  )
}

export default LayoutEffect;