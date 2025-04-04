import React, { useState } from 'react'

function Task10() {
const [arrayvariable,addArray]=useState(["Task 1","Task 2"])
const handle=()=>{
    addArray([...arrayvariable,`Task ${arrayvariable.length+1}`])
}     
  return (
    <div style={{textAlign:'center'}}>
    <h1>Task10</h1>
    <ul style={{listStyleType:'none'}}>
    {arrayvariable.map((t,i)=>(
        <li key={i}>{t}</li>
    ))}
    </ul>
    <button onClick={handle}>Task update</button>
    </div>
  )
}

export default Task10