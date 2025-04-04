import React, { useState } from 'react'

function Miniproject1() {
    const [task,setTask]=useState(["Task 1","Task 2","Task 3"])
    const tastincreament=()=>{
        setTask([...task,`Task ${task.length+1}`])
    }
    const tastdecreament=()=>{
        setTask(task.slice(0,-1))
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Miniproject1</h1>
        <ul style={{listStyleType:'none'}}>
            {task.map((ta,index)=>(
                <li key={index}>{ta}</li>
            ))}
            <button onClick={tastincreament}>add</button>
            <button onClick={tastdecreament}>remove</button>
        </ul>
    </div>
  )
}

export default Miniproject1