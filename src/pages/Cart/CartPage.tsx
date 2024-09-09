import Banner from "../../components/Banner"
import CopyrightNotice from "../../components/CopyrightNotice"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Products from "./sections/Products"


const CartPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner title="KOSZYK"/>
      <Products/>
      <Footer/>
      <CopyrightNotice/>
    </div>
  )
}

export default CartPage
