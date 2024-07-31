import Navbar from "../../components/Navbar"
import Filters from "./sections/Filters"
import Products from "./sections/Products"
import Shop from "./sections/ShopBanner"

const ShopPage = () => {
  return (
    <div>
      <Navbar/>
      <Shop/>
      <Filters/>
      <Products/>
    </div>
  )
}

export default ShopPage
