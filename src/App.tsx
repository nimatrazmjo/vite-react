import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './components/home/home.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Home />
    </div>
  )
}

export default App
