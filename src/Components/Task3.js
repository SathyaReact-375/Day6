import React, { useState } from 'react'

function Task3() {
    const [state,setState]=useState(0)
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task3</h1>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>

    </div>
  )
}

export default Task3