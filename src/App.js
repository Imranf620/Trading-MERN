import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Pages/Main/Main'
import Testing from './Pages/Test/Testing';

const App = () => {
  return (
    <div>
      <Router>

      <Routes>
        <Route  path="/" element={<Main />}/>
        <Route  path="/test" element={<Testing />}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App