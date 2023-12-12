import { createContext, useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react'

export const CartContext = createContext();

const carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoStorage);

    const toast = useToast()

    const toastCarrito = (cantidad) => {

    if(cantidad == 1){
        return (toast({
            position: 'top',
            title: 'Felicitaciones!',
            description: `Has agregado exitosamente ${cantidad} unidad al Carrito`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        )
    } else{
        return (toast({
            position: 'top',
            title: 'Felicitaciones!',
            description: `Has agregado exitosamente ${cantidad} unidades al Carrito`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        )
    }
    }    

    const agregarCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const enCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (enCarrito) {
            enCarrito.cantidad += cantidad;
            toastCarrito(cantidad);
        } else {
            nuevoCarrito.push(itemAgregado);
            toastCarrito(cantidad);
        }
        setCarrito(nuevoCarrito);

    };

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito }} >
            {children}
        </CartContext.Provider>
    )
}