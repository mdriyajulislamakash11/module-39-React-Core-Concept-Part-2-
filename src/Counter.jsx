import React, { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)

function handleCounter(){
    const newCount = count + 1;
    setCount(newCount)
}

function handleRemaining () {
    const newCount = count - 1;
   if(newCount >= 0){
    setCount(newCount)
   }
   return
}

  return (
    <div>
        <h3>Count {count}</h3>
        <button onClick={ handleCounter} >add</button>
        <button onClick={ handleRemaining} >Remain</button>

    </div>
  )
}

export default Counter