import React from 'react'

function Task2() {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task2</h1>
        <h1>Key Differences Between State and Props</h1>
  <ul style={{listStyleType:"none"}}>
    <li>State is managed within the component, while props are passed to the component from its parent.</li>
    <li>State is mutable and can change during the component's lifecycle, whereas props are immutable and cannot be modified by the child component.</li>
    <li>State is used to store dynamic data affecting the component's behavior, while props are used to pass data and configurations down to child components.</li>
  </ul>
    </div>
  )
}

export default Task2