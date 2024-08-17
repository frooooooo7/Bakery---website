import { createContext, useState } from 'react';


interface Product {
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
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };