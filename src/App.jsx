import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la tiendita donde podés encontrar todo lo que necesitás para llevar tus entrenamientos de Crossfit al 100%"} />
    </div>
  )
}

export default App