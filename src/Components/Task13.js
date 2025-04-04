import React, { useState } from 'react'
function Task13() {
    const[arr,setArray]=useState([])
    const handle=()=>{
       setArray([...arr,"task"])
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task13</h1>
            {arr.length===0?(<p>list is empty</p>):(arr.map((task,index)=>(
                <li key={index}>{task}</li>
            )))}
        <button onClick={handle}>add</button>
    </div>
  )
}

export default Task13