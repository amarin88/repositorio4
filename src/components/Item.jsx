import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody,Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter } from '@chakra-ui/react'


const Item = ({producto}) => {
  return (
    <div>
<Card align='center' maxW='sm'>
  <CardBody>
    <Image
      src={producto.img}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.name}</Heading>
      <Text color='blue.600' fontSize='2xl'>
      ${producto.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
      <Link to={`/item/${producto.id}`}>  
              Ver Descripción  
              </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>            

    </div>
  )
}

export default Item
