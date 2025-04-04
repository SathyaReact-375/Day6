import React, { useState } from 'react'

function Task6() {
    const[name,setName]=useState("Murugan")
    const [age,setAge]=useState(21)
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task6</h1>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={()=>setName("vadivelan")}>nameupdate</button>
        <button onClick={()=>setAge(23)}>ageupdate</button>
    </div>
  )
}

export default Task6