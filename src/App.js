import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './components/Books'
import Category from './components/Category'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Books/>} />
          <Route path="/about" element={<Category/>} />
        </Routes>
      </Router>
     
      </div>
  )
}

export default App