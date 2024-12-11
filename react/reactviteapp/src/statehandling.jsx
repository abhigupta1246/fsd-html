import React, { useState } from 'react'

function Statehandling() {
    const [count, setCount] = useState(20);
    function doIncreament() {
        // alert("hello bhai");
        setCount(count+20)
    }
    function Decreament() {
        // alert("nahi bhai");
        setCount(count-20)
    }
    return (
    <div>Statehandling
        <h2>Counter value:{count}</h2>
    <div>
        
<button onClick={doIncreament}>Increament</button>
<button onClick={Decreament}>Increament</button>
    </div>
    </div >
    
  )
}

export default Statehandling