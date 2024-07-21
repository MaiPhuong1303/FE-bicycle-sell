import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

type ShoppingContextProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
    thumbnail: string;
}

type ProductItem = {
    id: string;
    name: string;
    price: number;
    thumbnail: string;
}

interface ShoppingContextType {
    cartQty: number;
    totalPrice: number;
    cartItems: CartItem[];
    increaseQty: (id: string) => void;
    decreaseQty: (id: string) => void;
    addCartItem: (item: CartItem) => void;  // Chỉnh sửa kiểu ở đây
    removeCartItem: (id: string) => void;
    clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType);

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
}

export const ShoppingContextProvider = ({ children }: ShoppingContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id: string) => {
        const newItems = cartItems.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setCartItems(newItems);
    }

    const decreaseQty = (id: string) => {
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(id);
            } else {
                const newItems = cartItems.map(item =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                );
                setCartItems(newItems);
            }
        }
    }

    const addCartItem = (product: CartItem) => {
        const currentCartItem = cartItems.find(item => item.id === product.id);
        if (currentCartItem) {
            const newItems = cartItems.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
            setCartItems(newItems);
        } else {
            const newItem = { ...product };
            setCartItems([...cartItems, newItem]);
        }
    }

    const removeCartItem = (id: string) => {
        const newItems = cartItems.filter(item => item.id !== id);
        setCartItems(newItems);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <ShoppingContext.Provider value={{ cartItems, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, removeCartItem, clearCart }}>
            {children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingContext;
