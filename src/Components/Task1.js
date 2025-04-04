import React from 'react'

function Task1() {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task1</h1>
        <h1>React State Explanation</h1>
  <p>
    In React, state refers to a built-in object that stores data or information about the component. 
    This data can dynamically change based on user interactions, system events, or other factors. 
    The state allows React components to manage and respond to changes, making your applications interactive and dynamic.
  </p>
  <p>
    State is often used inside HTML-like elements (JSX) to dynamically render content. For example, you might use it 
    to display the value of a counter, update the visibility of a dropdown menu, or show a personalized greeting. By 
    embedding state variables in JSX, React re-renders the component automatically whenever the state updates, ensuring 
    that the displayed content stays synchronized with the underlying data.
  </p>

    </div>
  )
}

export default Task1