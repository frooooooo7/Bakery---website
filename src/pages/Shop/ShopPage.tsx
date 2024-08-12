import Navbar from "../../components/Navbar"
import { CheckboxLabelsProvider } from "./context/CheckboxLabelsContext"
import { RangeSliderProvider } from "./context/RangeSliderContext"
import Filters from "./sections/Filters"
import PopularProducts from "./sections/PopularProducts"
import Products from "./sections/Products"
import Shop from "./sections/ShopBanner"

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <Shop />
      <CheckboxLabelsProvider>
        <RangeSliderProvider>
          <Filters />
          <PopularProducts/>
          <Products />
        </RangeSliderProvider>
      </CheckboxLabelsProvider>
    </div>
  )
}

export default ShopPage
