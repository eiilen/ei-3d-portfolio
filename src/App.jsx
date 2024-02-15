import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Project, Contact } from './pages';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  
  )
}

export default App