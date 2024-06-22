import chocolate_truffles from "../assets/NEW_PRODUCTS/product-1.png"
import chocolate_pudding from "../assets/NEW_PRODUCTS/product-2.png"
import dark_chocolate_cake from "../assets/NEW_PRODUCTS/product-3.png"
import chocolate_cookies from "../assets/NEW_PRODUCTS/product-4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NewProducts = () => {


  const products = [
    {
      img: chocolate_truffles,
      title: "CHOCOLATE TRUFFLES",
      price: "$30.00",
      isDiscount: true,
      discountPrice: "$23.00"
    },
    {
      img: chocolate_pudding,
      title: "CHOCOLATE PUDDING",
      price: "$25.00",
      isDiscount: false,
      discountPrice: ""
    },
    {
      img: dark_chocolate_cake,
      title: "DARK CHOCOLATE CAKE",
      price: "$15.00",
      isDiscount: false,
      discountPrice: ""
    },
    {
      img: chocolate_cookies,
      title: "CHOCOLATE COOKIES",
      price: "$12.00",
      isDiscount: false,
      discountPrice: ""
    }
  ]



  return (
    <section className="px-2 py-10 lg:py-32 mt-10 bg-slate-100">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold pb-10">NOWE PRODUKTY</h1>
        <div className="slider-container">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div>
                <img src={product.img} className="" />
              </div>
              <h1>{product.title}</h1>
              <div>
                {product.isDiscount &&
                  <div className="flex">
                    <h3 className="text-gray-400 line-through">{product.price}</h3>
                    <h3>{product.discountPrice}</h3>
                  </div>
                }
              </div>
              <div className="flex">
                <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewProducts
