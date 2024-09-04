import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import QuantitySelector from "../../../components/QuantitySelector";

const Products = () => {
    const context = useContext(CartContext);
    if (!context) return null;

    const { cart } = context;

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
                                            <div className="w-24 h-24 bg-gray-200 p-2 mr-4">
                                                <img src={item.img} className="w-full h-full object-contain" alt={item.title}/>
                                            </div>
                                            {item.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">{item.price.toFixed(2)} PLN</td>
                                    <td className="px-6 py-4 text-center">
                                        <QuantitySelector price={item.price} isDiscount={item.isDiscount} onQuantityChange={() => console.log()}/>
                                    </td>
                                    <td className="px-6 py-4 text-center">100 PLN</td>
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
