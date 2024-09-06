import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import QuantitySelector from "../../../components/QuantitySelector";

const Products = () => {
    const context = useContext(CartContext);
    if (!context) return null;

    const { cart, handleQuantityChange } = context;

    return (
        <section className="px-2 py-12">
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="border border-gray-200">
                        <thead className="border-b border-gray-200">
                            <tr className="text-gray-500 tracking-wider">
                                <th className="px-6 py-3 text-center">Produkt</th>
                                <th className="px-6 py-3 text-center">Cena</th>
                                <th className="px-6 py-3 text-center">Ilość</th>
                                <th className="px-6 py-3 text-center">Całość</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((item) => (
                                <tr key={item.productID}>
                                    <td className="px-6 py-4 text-left">
                                        <div className="flex items-center">
                                            <div className="w-28 h-24 bg-gray-200 p-2 mr-4 flex-shrink-0">
                                                <img src={item.img} className="w-full h-full object-contain" alt={item.title} />
                                            </div>
                                            <h1 className="font-bold tracking-wider">{item.title}</h1>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center tracking-wider text-nowrap">
                                        {item.isDiscount ?
                                            <div>
                                                <h3 className="text-gray-400 line-through font-bold">{item.price.toFixed(2)} PLN</h3>
                                                {item.discountPrice?.toFixed(2)} PLN
                                            </div>
                                            :
                                            <div>
                                                {item.price.toFixed(2)} PLN
                                            </div>
                                        }
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <QuantitySelector
                                            initialQuantity={item.quantity || 1}
                                            onQuantityChange={(quantity) => handleQuantityChange(item.productID, quantity)} />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {item.isDiscount ?
                                            <div className="text-nowrap">
                                                {(Number(item.discountPrice?.toFixed(2)) * item.quantity).toFixed(2)} PLN
                                            </div>
                                            :
                                            <div>
                                                {(Number(item.price.toFixed(2)) * item.quantity).toFixed(2)} PLN
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Products;
