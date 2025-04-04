import React, { useState } from 'react'

function Task11() {
    const[arr,setArray]=useState(["item 1","item 2"])
    const newtask=`item ${arr.length+1}`
    const handler=()=>{
        setArray([...arr, newtask]);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task11</h1>
        <ul style={{listStyleType:'none'}}>
            {arr.map((t,i)=>(
                <li key={i}>{t}</li>
            ))}
        </ul>
        <button onClick={handler}>update</button>
    </div>
  )
}

export default Task11