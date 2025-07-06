import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Home from "../page/home"
import Make from "../page/make"
import Result from "../page/result"
import CardList from "../page/cardList"
import FriendList from "../page/friend"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/result" element={<Result />} />
        <Route path="/groups" element={<CardList />} />
        <Route path="/cards" element={<FriendList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
