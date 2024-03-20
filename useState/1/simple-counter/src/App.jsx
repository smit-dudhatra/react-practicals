import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
      
    setCount(
          (prevCount) => {return ++prevCount}
          // prevCount++ will not work here because it returns first and then increment the counter
          //hence useState will not update the UI as it will get the prevcount always 0
          // means no change in the useState variable
    
    );
  }

  const decrementCounter = () => {
    setCount(
      prevCount => --prevCount
    )
  }


  return (
    <>
    
    {count}
    <br /><br />
      <button onClick={incrementCounter}>+</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={decrementCounter}>-</button>
    </>
  )
}

export default App
