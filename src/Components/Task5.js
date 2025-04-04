import React, { useState } from 'react'

function Task5() {
    const[text,setText]=useState("user name")
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task5</h1>
    <p>before updated username:{text}</p>
    <button onClick={()=>setText("updated user name")}>update button</button>
    </div>
  )
}

export default Task5