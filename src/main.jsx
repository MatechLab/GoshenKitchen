import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Invento from './Invento.jsx'
// import { ProductProvider } from './context/ProductContext.jsx'
import  Meal from './Meal.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ProductProvider>
      <Invento />
    </ProductProvider> */}
    <Meal />
  </StrictMode>,
)
