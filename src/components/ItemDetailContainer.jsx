import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  
  const productos = [
    { id: 1, name: "Producto A", description: "descripcion producto A", price: 130, category: "cat1", img: "../src/assets/img/ejemplo1.jpeg" },
    { id: 2, name: "Producto B", description: "descripcion producto B", price: 150, category: "cat1", img: "../src/assets/img/ejemplo2.jpeg" },
    { id: 3, name: "Producto C", description: "descripcion producto C", price: 15, category: "cat2", img: "../src/assets/img/ejemplo3.jpeg" },
    { id: 4, name: "Producto D", description: "descripcion producto D", price: 25, category: "cat2", img: "../src/assets/img/ejemplo4.jpg" },
    { id: 5, name: "Producto E", description: "descripcion producto E", price: 50, category: "cat3", img: "../src/assets/img/ejemplo6.jpeg" },
    { id: 6, name: "Producto F", description: "descripcion producto F", price: 45, category: "cat3", img: "../src/assets/img/ejemplo7.jpeg" }
  ]
  
  const mostrarProductos = new Promise ((resolve,reject) => {
  
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      },2000)
    }
    else {
      reject(new Error("No se encontraron productos"))
    }
  })
  
  mostrarProductos
  .then(()=> {
  })
  .catch((error)=> {
      console.log(error) 
    })

  
  
  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer