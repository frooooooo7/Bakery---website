import { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    calculateTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);


    // Checks if the product already exists in the cart.
    // If the product exists, it updates its quantity.
    // If the product doesn't exist in the cart, it adds the new product to the cart.
    const addToCart = (product: Product) => {
        const existingProduct = cart.find((item) => item.productID === product.productID);

        if (existingProduct)
        {
            setCart((prevCart) => prevCart.map((item) => {
                if (item.productID === product.productID) return {...item, quantity: item.quantity+ 1};
                return item
            }))
        } else {
            setCart((prevCart) => [...prevCart, product]);
        }

        toast.success("Dodano do koszyka!");
    };

    // Removes the product from the cart.
    const removeFromCart = (productID: string) => {
        setCart((prevCart) => prevCart.filter((product) => product.productID !== productID));
    };


    // Handles the quantity changes in the cart.
    const handleQuantityChange = (productID: string, quantity: number) => {
        setCart((prevCart) => prevCart.map((product) =>
            product.productID === productID
                ? { ...product, quantity }
                : product
        ));
    };

    // Calculates total price of the products in the cart.
    const calculateTotalPrice = () => {
        const total = cart?.reduce((sum, item) => {
            const quantity = item.quantity || 1;
            const price = item.isDiscount ? item.discountPrice ?? item.price : item.price ?? 0;
            return sum + quantity * price;
        }, 0) || 0;
        return total;
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [cart])

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

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleQuantityChange, calculateTotalPrice }}>
            <ToastContainer />
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
