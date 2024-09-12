import { doc, getDoc} from "firebase/firestore";
import { useParams } from "react-router-dom"
import { db } from "../../../firebase";
import { useEffect, useState } from "react";


interface Product {
    productID: string;
    title: string;
    price: number;
    discountPrice?: number;
    img: string;
    isDiscount: boolean;
    isNew: boolean;
    category: string;
}

const Product = () => {


    const params = useParams<{ id: string }>();
    const productID = params.id

    const [productData, setProductData] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getProducts = async () => {
        if (!productID) {
            setError("Product ID is missing.");
            return;
        }
        try {
            const productRef = doc(db, "Products", productID);
            const product = await getDoc(productRef);

            if (product.exists()) {
                setProductData(product.data() as Product);
            } else {
                setError("Product not found");
            }
        } catch (err) {
            setError("Product not found");
        }
    }

    useEffect(() => {
        getProducts();
    }, [productID]);


    if (error) {
        return <div>Error: {error}</div>;
      }
    

    return (
        <section className="px-2 pt-10">
            <div className="container mx-auto max-w-5xl">
                <img src={productData?.img} alt="" />
                <h2>{productData?.title}</h2>
            </div>
        </section>
    )
}

export default Product
