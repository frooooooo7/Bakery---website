import Navbar from "../../components/Navbar"
import { RangeSliderProvider } from "./context/RangeSliderContext"
import Filters from "./sections/Filters"
import Products from "./sections/Products"
import Shop from "./sections/ShopBanner"

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <Shop />
      <RangeSliderProvider>
        <Filters />
        <Products />
      </RangeSliderProvider>
    </div>
  )
}

export default ShopPage
