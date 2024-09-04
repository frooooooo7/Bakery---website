import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Products from "./sections/Products"


const CartPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner title="KOSZYK"/>
      <Products/>
    </div>
  )
}

export default CartPage
