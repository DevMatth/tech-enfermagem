import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface PerfilProfessionalProps {
  name: string,
  price: number,
  state?: string,
  coren?: string,
  address: string,
  image: string,
  evaluation?: string
}

export function PerfilProfessional(props: PerfilProfessionalProps) {

  return (
      <Flex 
        direction="column" 
        borderTop={1}
        bg='white'
        w={['100vw', 420]}
        h={[190]}
        ml={[0, 30]}
        mb={12}
      >
        <Flex>
          <Box mt={4} ml={10}>
            <Image src={props.image} />
          </Box>
        
          <Box ml={10} mt={4}>
            <Text fontWeight='bold' fontSize='18' > {props.name} </Text>

            <Flex justifyContent='space-between'>

              <Text color="green.500" fontWeight='bold'>R${props.price}</Text>
              <Text fontWeight='bold' fontSize='small' color="gray.700">{props.state}</Text>
              
            </Flex>
            
            <Text fontSize="small" color="gray.400">{props.coren} | {props.address}</Text>

            <Image src={props.evaluation} mt={[ 4]}></Image>

          </Box>
        </Flex>
        
        <Button
          borderRadius="none"
          bg='blue.500' 
          color='white'
          mt={[5]}
          h={'50'}
          w={['100vw', 420]}
        >
          Ver Perfil
          </Button>
      
      </Flex>
  )
}