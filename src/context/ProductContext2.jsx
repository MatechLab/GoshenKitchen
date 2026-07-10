import React, { createContext, useContext, useMemo, useState } from 'react'

const ProductContext = createContext(null)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
    const newProduct = {
      id: product.id || Date.now(),
      ...product,
    }

    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  }

  const fetchProducts = () => products

  const value = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      fetchProducts,
    }),
    [products]
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)

export default ProductContext
