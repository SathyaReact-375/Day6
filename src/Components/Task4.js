import React, { useState } from 'react'

function Task4() {
    const [state,setState]=useState(0)
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task4</h1>
        <p>{state}</p>
        <button onClick={()=>{
            setState(state+1)
        }}>increment</button>
    </div>
  )
}

export default Task4