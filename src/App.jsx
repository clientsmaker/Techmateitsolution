import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Features/Layout'
import Home from '../src/Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path='/' element={<Layout />} >
  <Route exact path='/' element={<Home />} />
        </Route>
       </Routes>
    </>
  )
}

export default App
