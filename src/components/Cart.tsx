import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import QuantitySelector from "./QuantitySelector";
import { Typography } from '@mui/material';

const Cart = ({ isCartOpened }: { isCartOpened: boolean }) => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { cart, removeFromCart } = context;
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);



  // Calculate total price
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

  // Handle quantity change and save to localStorage
  const handleQuantityChange = (productID: string, quantity: number) => {
    setQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [productID]: quantity
      };
      localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  // Load quantities from localStorage
  useEffect(() => {
    const savedQuantities = localStorage.getItem('quantities');
    if (savedQuantities) {
      setQuantities(JSON.parse(savedQuantities));
    }
  }, []);

  return (
    <div className={`absolute z-50 top-12 right-0 bg-white drop-shadow-lg w-[400px] ${isCartOpened ? 'block' : 'hidden'}`}>
      <div className="p-5">
        <h1 className="text-lg font-bold">W KOSZYKU: {cart?.length} PRODUKTY</h1>
        <h1 className="text-base font-bold">ŁĄCZNA CENA: {totalPrice.toFixed(2)} PLN</h1>
      </div>
      <hr></hr>
      {cart?.map((item) => (
        <div key={item.productID} className="p-5 flex relative">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center p-2">
            <img src={item.img} className="w-full h-full object-contain" />
          </div>
          <div className="ml-2 flex flex-col justify-center space-y-4">
            <h1 className="text-base font-bold tracking-wider">{item.title}</h1>
            <div className="flex items-center">
              <QuantitySelector
                price={item.price}
                discountPrice={item.discountPrice}
                isDiscount={item.isDiscount}
                initialQuantity={quantities[item.productID] || 1}
                onQuantityChange={(quantity) => handleQuantityChange(item.productID, quantity)}
              />
              {item.isDiscount ?
                <Typography variant="h6" sx={{ ml: 2 }}>
                  ${item.discountPrice !== undefined ? (quantities[item.productID] * item.discountPrice).toFixed(2) : 'N/A'}
                </Typography>
                :
                <Typography variant="h6" sx={{ ml: 2 }}>${(quantities[item.productID] * item.price).toFixed(2)}</Typography>
              }
            </div>
          </div>
          <div className="absolute top-3 right-5 text-red-500 cursor-pointer" onClick={() => removeFromCart?.(item.productID)}>X</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
