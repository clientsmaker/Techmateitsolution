import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Features/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path='/' element={<Layout />} />
        <Route exact path='/' element={<Home />} />
       </Routes>
    </>
  )
}

export default App
