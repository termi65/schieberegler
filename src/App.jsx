import { useState } from 'react'
import './App.css'
import Horizontal from './parts/horizontal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Horizontal />
      </div>
    </>
  )
}

export default App
