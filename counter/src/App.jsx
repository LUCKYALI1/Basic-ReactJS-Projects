import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter , setCounter] = useState(0)
  const pushvalue = () => {
    setCounter(Counter + 1)
  }
  const popvalue = () => {
    if(Counter != 0){
      setCounter(Counter - 1)
    }
    else{
      setCounter(0)
      alert("You can't deal with the negatives value !")
    }
  }
  return (
    <>
    <h2>Counter - ReactProject</h2>
     <h3>Counter Value :  {Counter} </h3>
     <button onClick={pushvalue}>PUSH</button>
     <button onClick={popvalue}>POP</button>
     <br />
    </>
  )
}

export default App
