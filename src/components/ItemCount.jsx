import React from 'react'
import {useState} from 'react'
import { ButtonGroup ,Button, Badge, useToast} from '@chakra-ui/react'

const ItemCount = () => {

const [counter, setCounter] = useState(0)
const toast = useToast()

const increase = () => {
    if (counter < 10) {
    setCounter(count => count + 1);
    }
};

const decrease = () => {
    if (counter > 0) {
    setCounter(count => count - 1);
    }
};

const addToCart = () => {
    toast({
        position: 'top',
        title: 'Felicitaciones!',
        description: `Has agregado exitosamente ${counter} unidades al Carrito`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
}

    return (
    <div>
    <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='blue' onClick={increase}>
        +
    </Button>
    <Badge px='4' colorScheme='blue'>{counter}</Badge>
    <Button variant='solid' colorScheme='blue' onClick={decrease}>
        -
    </Button>
    <Button colorScheme='blue' onClick={addToCart}>Agregar al Carrito</Button>
    </ButtonGroup>

    </div>
  )
}

export default ItemCount