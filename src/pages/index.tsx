import { Flex, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { PerfilProfessional } from "../components/Perfil";

export default function Home() {
  return (
    <Flex
      direction="column"
      h="100vh"
      
    >
      <Box>
      <Header />

      </Box>
      <Box
        mt={[120, 150]}
        align="center"
      >
        <Text
          color='gray.300'
          align="center"
        >
          14 Profissionais
        </Text>
        <Grid
          
          templateColumns={['1fr', '1fr', '1fr 1fr']}
        >
          <GridItem>
            <PerfilProfessional
              image="Richard-Ramos.svg"
              name='Richard Ramos'
              price={70}
              state='Plantão'
              coren='Coren: 00/0000' 
              address="São Paulo - SP"
              evaluation='Avaliação.svg'
            />
          </GridItem>
            
          <GridItem>
            <PerfilProfessional
              image="Carolina-Magalhães.svg"
              name='Carolina Magalhães'
              price={80}
              state='Plantão'
              address="São Paulo - SP"
              evaluation='Avaliação.svg'
            />
          </GridItem>
          <GridItem>
            <PerfilProfessional
              image="Odete-Rocha.svg"
              name='Odete Rocha'
              price={70}
              state='Plantão'
              coren='Coren: 00/0000' 
              address="São Paulo - SP"
              evaluation='Avaliação.svg'
            />
          </GridItem>
          <GridItem>
            <PerfilProfessional
              image="Camila-Couto.svg"
              name='Camila Couto'
              price={70}
              state='Plantão'
              coren='Coren: 00/0000' 
              address="São Paulo - SP"
              evaluation='Avaliação.svg'
            />
          </GridItem>
          
        </Grid>
      </Box>
    </Flex>

  )
}
