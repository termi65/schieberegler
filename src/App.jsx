import { useState } from 'react'
import './App.css'
import Horizontal from './parts/Horizontal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Horizontal anzahl='3' min='1' max='10'/>
      </div>
    </>
  )
}

export default App
