import React, { useState } from 'react'

function Miniproject2() {
    const[state,setState]=useState(true)
  return (
    <div style={{textAlign:'center'}}>
        <h1>Miniproject2</h1>
        <>{state===true?(<div style={{ 
            textAlign: 'center', 
            marginTop: '20px', 
            padding: '20px', 
        }}>
            <img 
                src="https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg" 
                alt="Bulb" 
                style={{ width: '150px', height: 'auto' }} 
            />
            <p>Switch on</p>
        </div>
):(<p>Switch off</p>)}</>
<button onClick={()=>setState(!state)}>switch-on/off</button>
    </div>
  )
}

export default Miniproject2