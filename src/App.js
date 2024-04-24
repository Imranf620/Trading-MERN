import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Pages/Main/Main'


const App = () => {
  return (
    <div>
      <Router>

      <Routes>
        <Route  path="/" element={<Main />}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App