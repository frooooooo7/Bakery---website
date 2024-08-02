import { useEffect, useState } from "react"
import Select from "../components/Select"
import { db } from "../../../firebase";
import { collection,getDocs } from "firebase/firestore";
import Card from "../../../components/Card";


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

const getProducts = async () => {

  try {
    const ref = collection(db, "Products");
    const products = await getDocs(ref);
    setProducts(products.docs.map((doc) => ({...doc.data(), productID: doc.id})) as Product[])
  } catch (error)
  {
    console.log(error)
  }
}


useEffect(() => {
  getProducts();
},[])


  return (
    <section className="pt-10 px-2">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Select/>
          </div>
          <div className="grid grid-cols-1 gap-y-5">
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
