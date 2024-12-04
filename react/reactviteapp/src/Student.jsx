import React from 'react'
import './style.css'

function Student(props) {
  return (
    <div className='icard'> 
    {/* <table>
        <th style={{backgroundColor:'brown',color:'white'}} colSpan={2}>Student Information</th>
        <tbody>
            <tr><td>Name:</td><td>{props.name}</td></tr>
            <tr><td>Roll:</td><td>{props.roll}</td></tr>
            <tr><td>College:</td><td>{props.college}</td></tr>
        </tbody>
        <h3>
            Name:{props.name}
            Roll:{props.roll}
            college:{props.college}
        </h3>
        <table/> */}
        </div>
  )
}

export default Student