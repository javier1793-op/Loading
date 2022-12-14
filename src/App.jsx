import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loading from './assets/Components/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="conteiner">
      <h1>Loading</h1>
      <Loading/>  
      </div>
       
    </div>
  )
}

export default App
