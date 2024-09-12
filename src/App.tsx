import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./pages/Home/Home"
import ShopPage from "./pages/Shop/ShopPage"
import CartPage from "./pages/Cart/CartPage"
import ProductPage from "./pages/Product/ProductPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sklep" element={<ShopPage/>} />
          <Route path="/koszyk" element={<CartPage/>} />
          <Route path="/produkt/:id" element={<ProductPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
