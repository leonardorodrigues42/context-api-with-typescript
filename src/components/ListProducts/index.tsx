import { useContext } from "react"
import products from "../../db"
import { CartContext } from "../../providers/Cart"
import ListProductsDiv from "./styles"

const ListProducts = () => {

    const { addProduct, cart, deleteProduct } = useContext(CartContext)

    return (
        <>
            <ListProductsDiv>
                <h2>Produtos</h2>
                {products.map(product => {
                    return (
                        <div key={product.id} className="product-cart">
                            <figure>
                                <img src={product.image} alt="" />
                            </figure>
                            <h3>{product.title}</h3>
                            <span className="price">R$ {product.price}</span>
                            <button onClick={() => addProduct(product)} type="button">Adicionar ao carrinho</button>
                        </div>
                    )
                })} 
            </ListProductsDiv>
            <ListProductsDiv>
                <h2>Carrinho</h2>
                {cart && cart.map(product => {
                    return (
                        <div key={product.id} className="product-cart">
                            <figure>
                                <img src={product.image} alt="" />
                            </figure>
                            <h3>{product.title}</h3>
                            <span className="price">R$ {product.price}</span>
                            <button onClick={() => deleteProduct(product)} type="button">Remover carrinho</button>
                        </div>
                    )
                })}
            </ListProductsDiv>
        </>
    )
}

export default ListProducts