import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './App.css'

import { CartProvider } from './context/CartContext'


const App = () => {


  return (
    <div>

      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route exact path="/productos/:categoria" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>

  )

}

export default App