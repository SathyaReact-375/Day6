import React, { useState } from 'react'

function Task7() {
    const [state,setState]=useState(true)
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task7</h1>
        <p>value:{state?"true":"false"}</p>
        <button onClick={()=>setState(!state)}>toggles</button>
    </div>
  )
}

export default Task7