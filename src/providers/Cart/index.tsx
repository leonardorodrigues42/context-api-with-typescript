import { createContext, ReactNode, useState } from "react"


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface CartProps {
    children: ReactNode
}

interface CartProviderData {
    cart: Product[]
    addProduct: (product: Product) => void
    deleteProduct: (product: Product) => void
}

export const CartContext = createContext<CartProviderData>({} as CartProviderData)

const CartProvider = ({children}: CartProps) => {
    const [cart, setCart] = useState<Product[]>([])

    const addProduct = (product: Product) => {
        if (!cart.includes(product)) {
            setCart([...cart, product])
        }
    }

    const deleteProduct = (productToBeDeleted: Product) => {

        if (cart.includes(productToBeDeleted)) {
            const newCart = cart.filter(
              (product) => product.title !== productToBeDeleted.title
            )
            setCart(newCart)
        }

    }

    return (
        <CartContext.Provider value={{cart, addProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider