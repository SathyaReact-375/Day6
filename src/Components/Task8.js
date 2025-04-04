import React, { useState } from 'react'

function Task8() {
    const[inputText,setInputText]=useState("")
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task8</h1>
        <input onChange={(e)=>setInputText(e.target.value)}></input>
        <p>{inputText}</p>
    </div>
  )
}

export default Task8