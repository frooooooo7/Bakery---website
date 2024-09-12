import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Product from "./sections/Product"

const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner title="PRODUKT"/>
      <Product/>
    </div>
  )
}

export default ProductPage
