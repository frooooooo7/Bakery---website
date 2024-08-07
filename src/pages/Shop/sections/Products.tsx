import { useContext, useEffect, useState } from "react"
import Select from "../components/Select"
import { collection,getDocs, query, where } from "firebase/firestore";
import Card from "../../../components/Card";
import { db } from "../../../firebase";
import { RangeContext } from "../context/RangeSliderContext";


interface Product {
  productID: string;
  title: string;
  price: string;
  discountPrice?: string;
  img: string;
  isDiscount: boolean;
  isNew: boolean
}


const Products = () => {

const [products, setProducts] = useState<Product[]>([]);

const { sliderValue } = useContext(RangeContext);

const getProducts = async () => {
  try {
    const ref = collection(db, "Products");
    let q;
    if (sliderValue.length > 0) {
      q = query(ref, where("price", ">=", sliderValue[0]), where("price", "<=", sliderValue[1]));
    } else {
      q = ref;
    }
    const products = await getDocs(q);
    console.log('products:', products);
    setProducts(products.docs.map((doc) => ({...doc.data(), productID: doc.id})) as Product[])
  } catch (error)
  {
    console.log(error)
  }
}

useEffect(() => {
  getProducts();
},[sliderValue])


  return (
    <section className="pt-10 px-2">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Select/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
            {products.map((product) => (
              <div key={product.productID} className="px-4">
                  <Card
                  isDiscount={product.isDiscount}
                  discountPrice={product.discountPrice}
                  price={product.price}
                  isNew={product.isNew}
                  img={product.img}
                  title={product.title}
                  background="bg-gray-200"
                  />
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Products
