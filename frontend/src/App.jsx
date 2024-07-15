import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contacts from "./pages/Contacts"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/contacts" Component={Contacts} />
      </Routes>
    </>
  )
}

export default App
