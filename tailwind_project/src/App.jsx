import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Ayan",
    age: 21
  }

  return (
<div>
  <span className='bg-green-400'><h1 >Tailwind test</h1></span>
  <h2 className='bg-red-500'>Chai aur code</h2>
  <Card username = "chai aur code" someobj = {myobj}/>
  <Card username = "chai aur code"/>
</div>
  )
}

export default App
