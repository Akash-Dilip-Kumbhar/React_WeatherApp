import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WheatherApp2 from './WheatherApp2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WheatherApp2/>
    </>
  )
}

export default App
