import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiArrowBack, BiSearch } from 'react-icons/bi'

export function Header() {
  return (
    <Flex
      position='absolute'
      as='header'
      bg={"green.700"}
      h='100%'
      maxHeight={[20, 32]}
      w='100vw'
      alignItems='center'
      justifyContent='space-between'
      
    >

      <Icon
        as={BiArrowBack}
        color='white'
        fontSize='20'
        ml={[5, 20]}
        cursor="pointer"
      />

      <Text
        fontSize='24'
        fontWeight='bold'
        color="white"
      >
        Tec Enfermagem
      </Text>

      <Icon
        as={BiSearch}
        color='white'
        fontSize='20'
        mr={[5, 20]}
        cursor='pointer'
      />

    </Flex>
  )
}