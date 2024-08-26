import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import QuantitySelector from "./QuantitySelector";



const Cart = ({ isCartOpened }: { isCartOpened: boolean }) => {
  const { cart, removeFromCart } = useContext(CartContext) ?? {};
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);

 
  useEffect(() => {
    const calculateTotal = () => {
      const total = cart?.reduce((sum, item) => {
        const quantity = quantities[item.productID] || 1;
        const price = item.isDiscount ? item.discountPrice ?? item.price : item.price ?? 0;
        return sum + quantity * price;
      }, 0) || 0;
      setTotalPrice(total);
    };
    calculateTotal();
  }, [quantities, cart]);



  const handleQuantityChange = (productID: string, quantity: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productID]: quantity
    }));
  };

  return (
    <div className={`absolute z-50 top-12 right-0 bg-white drop-shadow-lg w-[400px] ${isCartOpened ? 'block' : 'hidden'}`}>
      <div className="p-5">
        <h1 className="text-lg font-bold">IN CART: {cart?.length} PRODUCTS</h1>
        <h1 className="text-base font-bold">TOTAL PRICE: ${totalPrice.toFixed(2)}</h1>
      </div>
      <hr></hr>
      {cart?.map((item) => (
        <div key={item.productID} className="p-5 flex relative">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center p-2">
            <img src={item.img} className="w-full h-full object-contain" />
          </div>
          <div className="ml-2 flex flex-col justify-center space-y-4">
            <h1 className="text-base font-bold tracking-wider">{item.title}</h1>
            <QuantitySelector price={item.price} discountPrice={item.discountPrice} isDiscount={item.isDiscount} onQuantityChange={(quantity) => handleQuantityChange(item.productID, quantity)}/>
          </div>
          <div className="absolute top-3 right-5 text-red-500 cursor-pointer" onClick={() => removeFromCart?.(item.productID)}>X</div>
        </div>
      ))}
    </div>
  )
}

export default Cart