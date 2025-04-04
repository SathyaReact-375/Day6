import React, { useState } from 'react'

function Task9() {
    const[counter,resetCounter]=useState(10)
  return (
    <div style={{textAlign:"center"}}>
      <h1>Task9</h1>
            <p>{counter}</p>
            <button onClick={()=>resetCounter(0)}>Reset</button>
    </div>
  )
}

export default Task9