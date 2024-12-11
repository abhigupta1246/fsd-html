import React, { useState } from 'react'
import cat from './cat3.jpg'
import './imgman.css';
function ImageManipulation() {
  const[height,setheight]=useState(100);
  const[angle,setAngle]=useState(30);
  const[red, setred]=useState();
  const[green, setgreen]=useState();
  const[blue, setblue]=useState();

  function enhanceHeight(){
 
    setheight(height+20)
  }
  function dorotate(){
    setAngle(angle+30)
  }
  function changeColor(){
    setred(Math.random()*255);
    setgreen(Math.random()*255);
    setblue(Math.random()*255);
  }
  return (
    <div className='container'>
    <div className='imgdiv' style={{ backgroundColor:`RGB(${red}, ${green}, ${blue})`,marginTop:'70px',marginLeft: '200px',height:'200px', width:'200px', border:'2px solid red'}}>
    <img src ={cat} height={height} width={200} style={{transform:`rotate(${angle}deg)`}} alt='cat image'/>
    </div>
    <div style ={{border:'2px solid red', marginTop:'100px', paddingLeft:'100px'}}>
      <button onClick={enhanceHeight}style={{backgroundColor: 'cyan',color:'red'}}> Enhance Height</button>
      &nbsp;
      <button> Enhance Width</button>
      &nbsp;
      <button onClick={changeColor}> Color Change</button>
      &nbsp;
      <button onClick={dorotate}> Rotate</button>
    </div>
    </div>
  )
}

export default ImageManipulation