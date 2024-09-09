import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import QuantitySelector from "./QuantitySelector";
import { Typography } from '@mui/material';

const Cart = ({ isCartOpened }: { isCartOpened: boolean }) => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { cart, removeFromCart, handleQuantityChange, calculateTotalPrice } = context;
  

  return (
    <div className={`absolute z-50 top-12 right-0 bg-white drop-shadow-lg w-[400px] ${isCartOpened ? 'block' : 'hidden'}`}>
      <div className="p-5">
        <h1 className="text-lg font-bold">W KOSZYKU: {cart?.length} PRODUKTY</h1>
        <h1 className="text-base font-bold">ŁĄCZNA CENA: {calculateTotalPrice().toFixed(2)} PLN</h1>
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
                initialQuantity={item.quantity || 1}
                onQuantityChange={(quantity) => handleQuantityChange(item.productID, quantity)}
              />
              {item.isDiscount ?
                <Typography variant="h6" sx={{ ml: 2 }}>
                  ${(item.quantity * (item.discountPrice ?? item.price)).toFixed(2)}
                </Typography>
                :
                <Typography variant="h6" sx={{ ml: 2 }}>
                  ${(item.quantity * item.price).toFixed(2)}
                </Typography>
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
