import React, {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/products" Component={Products} />
      </Routes>
    </>
  )
}

export default App
