
import { createContext, useState } from "react";



//create a context

export const ProductContext = createContext(); //empty <tank />

//create a provider component: a super component that will wrap the entire app and provide the context to all child components
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, productname: 'Apple', qty: 2 },
    { id: 2, productname: 'Yellow Jeans', qty: 5 },
  ])

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: product.id || Date.now(), ...product },
    ])
  }

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  }

  const fetchProducts = () => products

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, removeProduct, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext