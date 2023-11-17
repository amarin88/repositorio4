import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      
      <Routes>
      <Route exact path="/" element ={<Home />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/cart" element={<Cart />} />

      </Routes>
      </BrowserRouter>

</div>

  )

}

export default App