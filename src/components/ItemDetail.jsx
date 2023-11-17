import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { Card, CardBody,Image, Stack, Heading, Text, Divider, CardFooter } from '@chakra-ui/react'

const ItemDetail = ({productos}) => {

  const {id} = useParams()

  const productosFiltrados = productos.filter ((producto) => producto.id == id)
  
  return (
    <div>
        { productosFiltrados.map((p)=>{
        return(
        <div key={p.id}>

<Card align='center' maxW='sm'>
  <CardBody>
    <Image
      src={p.img}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{p.name}</Heading>
      <Text>
      {p.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      ${p.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <ItemCount />
  </CardFooter>
</Card> 
        </div> 
        )

    })
    }
    </div>
  )
}

export default ItemDetail

