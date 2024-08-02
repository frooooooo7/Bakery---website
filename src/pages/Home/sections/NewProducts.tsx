import chocolate_truffles from "../../../assets/NEW_PRODUCTS/product-1.png"
import chocolate_pudding from "../../../assets/NEW_PRODUCTS/product-2.png"
import dark_chocolate_cake from "../../../assets/NEW_PRODUCTS/product-3.png"
import chocolate_cookies from "../../../assets/NEW_PRODUCTS/product-4.png"
import Slider from "react-slick"
import Card from "../../../components/Card"

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
    <section className="px-2 py-6 lg:py-12 mt-10 bg-slate-100">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold pb-10 md:text-3xl lg:text-5xl xl:text-6xl">NOWE PRODUKTY</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-4">
                <Card 
                isDiscount={product.isDiscount}
                discountPrice={product.discountPrice}
                price={product.price}
                isNew={product.isNew}
                img={product.img}
                title={product.title}
                background={"bg-white"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default NewProducts
