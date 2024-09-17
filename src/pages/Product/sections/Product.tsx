import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { useContext, useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";
import ProductRating from "../components/ProductRating";
import QuantitySelector from "../../../components/QuantitySelector";
import { CartContext } from "../../../contexts/CartContext";


interface Product {
    productID: string;
    title: string;
    price: number;
    discountPrice?: number;
    img: string[];
    isDiscount: boolean;
    isNew: boolean;
    category: string;
}

const Product = () => {
    const params = useParams<{ id: string }>();
    const productID = params.id;

    const [productData, setProductData] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const context = useContext(CartContext)
    if (!context) return null
    const { addToCart } = context


    const getProducts = async () => {
        if (!productID) {
            setError("Product ID is missing.");
            return;
        }

        try {
            const productRef = doc(db, "Products", productID);
            const productSnapshot = await getDoc(productRef);

            if (productSnapshot.exists()) {
                setProductData(productSnapshot.data() as Product);
            } else {
                setError("Product not found.");
            }
        } catch (err) {
            console.error("Error fetching product:", err);
            setError("Failed to fetch the product. Please try again later.");
        }
    };

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity)
    }

    const handleAddToCart = () => {
        if (!productData) return;

        const productToAdd = {
            productID: productData.productID,
            title: productData.title,
            price: productData.price,
            discoutPrice: productData.discountPrice,
            img: productData.img[0],
            isDiscount: productData.isDiscount,
            isNew: productData.isNew,
            quantity: quantity,
        }
        addToCart(productToAdd)
    }

    useEffect(() => {
        getProducts();
    }, [productID]);

    if (error) {
        return (
            <div className="px-2 pt-10">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-red-500">Error: {error}</h2>
                </div>
            </div>
        );
    }

    return (
        <section className="px-2 pt-10">
            <div className="container mx-auto max-w-2xl lg:max-w-6xl">
                {productData && (
                    <>
                        <div className="lg:flex space-x-5">
                            <div className="flex justify-center">
                                <ImageGallery img={productData.img || []} />
                            </div>
                            <div className="space-y-5">
                                <h1 className="mt-5 text-xl font-bold md:text-3xl">Trufle Czekoladowe</h1>
                                <div className="flex items-center space-x-5">
                                    <h1 className="text-2xl font-bold text-pink-700">{productData.isDiscount ? productData.discountPrice : productData.price} PLN</h1>
                                    <ProductRating value={4.5} />
                                </div>
                                <p className="max-w-[545px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur cupiditate incidunt repellat. Temporibus molestiae placeat, dicta aut odit beatae suscipit quibusdam recusandae cupiditate tenetur sint officiis! Enim est officiis totam dolore deleniti explicabo, et quidem debitis libero, error beatae.</p>
                                <hr></hr>
                                <div>
                                    <h1>Kategoria:
                                        {productData.category == "cakes" &&
                                            " ciastka"
                                        }
                                        {productData.category == "puddings" &&
                                            " puddingi"
                                        }
                                        {productData.category == "candies" &&
                                            " cukierki"
                                        }
                                    </h1>
                                    <h1>Waga: 7,25 oz</h1>
                                    <h1>Pudełko: 60 x 60 x 90 cm</h1>
                                </div>
                                <div className="pb-5 flex items-center space-x-4">
                                    <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={1} />
                                    <button
                                        className='px-2 py-2 lg:px-4 lg:py-3 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold'
                                        onClick={handleAddToCart}
                                    >DODAJ DO KOSZYKA</button>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                       
                    </>
                )}
            </div>
        </section>
    );
};

export default Product;
