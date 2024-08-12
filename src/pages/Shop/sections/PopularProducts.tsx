import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";


interface PopularProducts {
    productID: string;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    isDiscount: boolean;
}


const PopularProducts = () => {

    const [popularProducts, setPopularProducts] = useState<PopularProducts[]>([]);


    const getPopularProducts = async () => {
        try {
            const ref = collection(db, "Products");
            const q = query(ref, where("isPopular", "==", true));
            const popularProducts = await getDocs(q);
            setPopularProducts(popularProducts.docs.map((doc) => ({ ...doc.data(), productID: doc.id })) as PopularProducts[])
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getPopularProducts();
    }, [])


    return (
        <section className="pt-10 px-2">
            <h1 className="text-center font-bold border-b border-gray-300 pb-3 uppercase mb-10">Popularne produkty</h1>
            <div className="container mx-auto flex justify-center">
                {popularProducts.map((product) => (
                    <div key={product.productID} className="w-52 flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-200 mb-2">
                            <img src={product.img} className="h-full" />
                        </div>
                        <h1 className="text-center text-xs font-bold tracking-wider">{product.title}</h1>
                        {product.isDiscount ? (
                            <div className="flex items-center justify-center space-x-3 text-xs">
                                <h3 className="text-gray-400 line-through font-bold">{Number(product.price).toFixed(2)}</h3>
                                <h3 className="text-pink-700 font-bold">{Number(product.discountPrice).toFixed(2)} PLN</h3>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-xs">
                                <h3 className="text-pink-700 font-bold">{Number(product.price).toFixed(2)} PLN</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularProducts
