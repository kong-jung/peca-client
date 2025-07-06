import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Home from "../page/home"
import Make from "../page/make"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make" element={<Make />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
