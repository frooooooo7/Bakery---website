import { useContext, useEffect, useState } from "react"
import Select from "../components/Select"
import { collection,getDocs, query, where } from "firebase/firestore";
import Card from "../../../components/Card";
import { db } from "../../../firebase";
import { RangeContext } from "../context/RangeSliderContext";
import { CheckboxLabelsContext } from "../context/CheckboxLabelsContext";


interface Product {
  productID: string;
  title: string;
  price: string;
  discountPrice?: string;
  img: string;
  isDiscount: boolean;
  isNew: boolean;
  category: string;
}


const Products = () => {

const [products, setProducts] = useState<Product[]>([]);

const { sliderValue } = useContext(RangeContext);
const { checked } = useContext(CheckboxLabelsContext)

const getProducts = async () => {
  try {
    const ref = collection(db, "Products");
    let q;
    if (sliderValue.length > 0) {
      q = query(ref, where("price", ">=", sliderValue[0]), where("price", "<=", sliderValue[1]));
    } else {
      q = ref;
    }

    if (!checked.everything) {
      const categories = [];
      if (checked.cakes) categories.push("cakes");
      if (checked.puddings) categories.push("puddings");
      if (checked.candies) categories.push("candies");
      if (categories.length === 0) {
        // jeśli żadna kategoria nie jest zaznaczona, nie filtruj po kategorii
        q = ref;
      } else {
        q = query(q, where("category", "in", categories));
      }
      console.log(categories)
    }

    const products = await getDocs(q);
    setProducts(products.docs.map((doc) => ({...doc.data(), productID: doc.id})) as Product[])
  } catch (error)
  {
    console.log(error)
  }
}

useEffect(() => {
  getProducts();
},[sliderValue, checked])


  return (
    <section className="pt-10 px-2">
        <div className="container mx-auto">
          <div className="flex justify-center mb-3">
            <Select/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5">
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
