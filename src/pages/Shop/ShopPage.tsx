import Navbar from "../../components/Navbar"
import { CheckboxLabelsProvider } from "./context/CheckboxLabelsContext"
import { RangeSliderProvider } from "./context/RangeSliderContext"
import Categories from "./sections/Categories"
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
          <div className="container mx-auto lg:flex lg:justify-center">
            <div className="lg:flex lg:flex-col">
              <Filters />
              <div className="sm:grid sm:grid-cols-2 lg:grid-cols-1">
                <Categories />
                <PopularProducts />
              </div>
            </div>
            <div className="">
              <Products />
            </div>
          </div>
        </RangeSliderProvider>
      </CheckboxLabelsProvider>
    </div>
  )
}

export default ShopPage
