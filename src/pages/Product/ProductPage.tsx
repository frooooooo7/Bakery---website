import Banner from "../../components/Banner"
import CopyrightNotice from "../../components/CopyrightNotice"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Product from "./sections/Product"

const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner title="PRODUKT"/>
      <Product/>
      <Footer/>
      <CopyrightNotice/>
    </div>
  )
}

export default ProductPage
