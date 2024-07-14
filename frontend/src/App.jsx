import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
      </Routes>
    </>
  )
}

export default App
