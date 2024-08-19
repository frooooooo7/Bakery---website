import { createContext, useState } from 'react';


interface Product {
    productID: string;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    isDiscount: boolean;
    isNew: boolean;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productID: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productID: string) => {
        setCart((prevCart) => prevCart.filter((product) => product.productID !== productID));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };