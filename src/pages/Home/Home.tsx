import Navbar from "../../components/Navbar"
import Hero from "./sections/Hero"
import Promo from "./sections/Promo"
import Offer from "./sections/Offer"
import NewProducts from "./sections/NewProducts"
import ChooseUs from "./sections/ChooseUs"
import SummerSale from "./sections/SummerSale"
import AboutUs from "./sections/AboutUs"
import Team from "./sections/Team"
import Offer2 from "./sections/Offer2"
import Testimonials from "./sections/Testimonials"
import Logos from "./sections/Logos"
import Footer from "../../components/Footer"
import CopyrightNotice from "../../components/CopyrightNotice"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Promo/>
      <Offer/>
      <NewProducts/>
      <ChooseUs/>
      <SummerSale/>
      <AboutUs/>
      <Team/>
      <Offer2/>
      <Testimonials/>
      <Logos/>
      <Footer/>
      <CopyrightNotice/> 
    </div>
  )
}

export default Home
