import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentEntry from './components/StudentEntry'
import SearchStudent from './components/SearchStudent'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StudentEntry/>
        <SearchStudent/>
        <ViewAll/>
    </>
  )
}

export default App
