import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from "./CharacterList.tsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <CharacterList/>

    </>
  )
}

export default App
