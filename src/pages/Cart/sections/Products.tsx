import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import QuantitySelector from "../../../components/QuantitySelector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const context = useContext(CartContext);
    if (!context) return null;

    const { cart, handleQuantityChange, calculateTotalPrice } = context;

    const handleCoupon = () => {
        toast.error('Nieprawidłowy kupon!');
    }

    return (
        <section className="px-2 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="overflow-x-auto">
                    <table className="mx-auto border border-gray-200 max-w-4xl">
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

                <div className="lg:flex lg:items-center lg:justify-between max-w-4xl">
                    <div className="py-5 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                        <input type="text" className="border border-gray-300 py-2 px-4 text-center" placeholder="Kupon" />
                        <button
                            className='px-6 py-2 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'
                            onClick={handleCoupon}
                        >ZASTOSUJ
                        </button>
                        <ToastContainer/>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-10">
                        <div className="flex items-center justify-center space-x-4">
                            <h1 className="py-5 text-gray-400 font-bold tracking-wider">CAŁOŚĆ</h1>
                            <h1 className="text-2xl font-bold ">{calculateTotalPrice().toFixed(2)} PLN</h1>
                        </div>
                        <button className='px-5 py-3 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>PRZEJDŹ DO PŁATNOŚCI</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
