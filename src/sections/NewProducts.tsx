import chocolate_truffles from "../assets/NEW_PRODUCTS/product-1.png"
import chocolate_pudding from "../assets/NEW_PRODUCTS/product-2.png"
import dark_chocolate_cake from "../assets/NEW_PRODUCTS/product-3.png"
import chocolate_cookies from "../assets/NEW_PRODUCTS/product-4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick"

const NewProducts = () => {

  const products = [
    {
      img: chocolate_truffles,
      title: "CHOCOLATE TRUFFLES",
      price: "$30.00",
      isDiscount: true,
      discountPrice: "$23.00",
      isNew: false
    },
    {
      img: chocolate_pudding,
      title: "CHOCOLATE PUDDING",
      price: "$25.00",
      isDiscount: false,
      discountPrice: "",
      isNew: false
    },
    {
      img: dark_chocolate_cake,
      title: "DARK CHOCOLATE CAKE",
      price: "$15.00",
      isDiscount: false,
      discountPrice: "",
      isNew: true
    },
    {
      img: chocolate_cookies,
      title: "CHOCOLATE COOKIES",
      price: "$12.00",
      isDiscount: false,
      discountPrice: "",
      isNew: false
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  }

  return (
    <section className="px-2 py-10 lg:py-32 mt-10 bg-slate-100">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold pb-10">NOWE PRODUKTY</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-4">
                <div className="relative bg-white pb-5 pt-7 shadow-lg flex flex-col justify-between" style={{ height: '350px' }}>
                  <div>
                    {product.isDiscount && (
                      <span className="absolute top-0 left-0 bg-pink-600 text-white px-2 py-1 text-xs font-bold">SALE</span>
                    )}
                    {product.isNew && (
                      <span className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs font-bold">NEW</span>
                    )}
                    <div className="h-40 flex items-center justify-center px-4">
                      <img src={product.img} className="h-max" />
                    </div>
                    <h1 className="text-center font-bold px-4">{product.title}</h1>
                    <div className="px-4">
                      {product.isDiscount ? (
                        <div className="flex items-center justify-center space-x-3">
                          <h3 className="text-gray-400 line-through font-bold">{product.price}</h3>
                          <h3 className="text-pink-700 font-bold">{product.discountPrice}</h3>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <h3 className="text-pink-700 font-bold">{product.price}</h3>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className="w-12 h-12 bg-pink-700 text-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default NewProducts
