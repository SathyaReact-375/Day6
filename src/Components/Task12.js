import React, { useState } from 'react'

function Task12() {
    const [arr,setArr]=useState(["item 1","item 2","items 3"]);
    const handle=()=>{
        setArr(arr.slice(0,-1))
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task12</h1>
        <ul style={{listStyleType:'none'}}>
            {arr.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={handle}>remove last</button>
    </div>
  )
}

export default Task12