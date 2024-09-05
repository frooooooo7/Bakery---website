import { createContext, useEffect, useState } from 'react';

interface Product {
    productID: string;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    isDiscount: boolean;
    isNew: boolean;
    quantity: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productID: string) => void;
    handleQuantityChange: (productID: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    // Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes and if cart is not empty.
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productID: string) => {
        setCart((prevCart) => prevCart.filter((product) => product.productID !== productID));
    };

    const handleQuantityChange = (productID: string, quantity: number) => {
        setCart((prevCart) => prevCart.map((product) =>
            product.productID === productID
                ? { ...product, quantity }
                : product
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleQuantityChange }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
