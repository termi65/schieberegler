import './App.css'
import Horizontal from './parts/Horizontal'

function App() {

  return (
    <>
      <div>
        <h1>Hoppla</h1>
            <Horizontal anzahl={3} min={1} max={12} />
      </div>
    </>
  )
}

export default App
