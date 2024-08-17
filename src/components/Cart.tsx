import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import QuantitySelector from "./QuantitySelector";


const Cart = ({ isCartOpened }: { isCartOpened: boolean }) => {
  const { cart } = useContext(CartContext) ?? {};

  return (
    <div className={`absolute z-50 top-12 right-0 bg-white drop-shadow-lg w-[400px] ${isCartOpened ? 'block' : 'hidden'}`}>
      <div className="p-5">
        <h1 className="text-lg font-bold">IN CART: 2 PRODUCTS</h1>
        <h1 className="text-base font-bold">TOTAL PRICE: $48</h1>
      </div>
      <hr></hr>
      {cart?.map((item) => (
        <div className="p-5 flex">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center p-2">
            <img src={item.img} className="w-full h-full object-contain" />
          </div>
          <div className="ml-2 flex flex-col justify-center space-y-4">
            <h1 className="text-base font-bold tracking-wider">{item.title}</h1>
            <QuantitySelector price={item.price} discountPrice={item.discountPrice} isDiscount={item.isDiscount}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart