import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./pages/Home/Home"
import ShopPage from "./pages/Shop/ShopPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sklep" element={<ShopPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
