import Navbar from "../../components/Navbar"
import Filters from "./sections/Filters"
import Shop from "./sections/ShopBanner"

const ShopPage = () => {
  return (
    <div>
      <Navbar/>
      <Shop/>
      <Filters/>
    </div>
  )
}

export default ShopPage
