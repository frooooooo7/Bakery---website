import Navbar from "../../components/Navbar"
import { CheckboxLabelsProvider } from "./context/CheckboxLabelsContext"
import { RangeSliderProvider } from "./context/RangeSliderContext"
import Filters from "./sections/Filters"
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
          <Products />
        </RangeSliderProvider>
      </CheckboxLabelsProvider>
    </div>
  )
}

export default ShopPage
