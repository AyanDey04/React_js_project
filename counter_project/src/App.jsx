import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter, setcounter]=useState(15)

  const addvalue = ()=>{
    if(counter<=19){
      setcounter(counter+1)
    }
  }
  const removevalue = ()=>{
    if(counter>=1){
      setcounter(counter-1)
    }
  }
  
  return (
    <div>
    <h1>Chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br/>
    <button onClick={removevalue}>Remove value</button>
    </div>
   

  )
}

export default App
