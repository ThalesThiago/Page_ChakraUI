import React, { useState } from 'react';
import { Box, Button, Container, Heading, Image, Text, VStack, Collapse } from '@chakra-ui/react';

function App() {
  const [showChakraInfo, setShowChakraInfo] = useState(false);

  return (
    <Box>
      <Box as="nav" bg="teal.500" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading as="h1" size="lg">My Landing Page</Heading>
        </Container>
      </Box>

      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiM3a6Y-BWBPXb3QeMMwkLgX8BALsSIEj52qyX8MfqQ&s" alt="Banner" />

      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="2xl">Bem-vindo à nossa página inicial</Heading>
            <Text fontSize="lg">Esta é uma página de destino simples usando React e Chakra UI.</Text>
            <Button colorScheme="teal" size="lg" onClick={() => setShowChakraInfo(!showChakraInfo)}>
              {showChakraInfo ? "Ocultar Resumo do Chakra UI" : "Saber Mais sobre Chakra UI"}
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={20} id="about">
        <Heading as="h3" size="xl" mb={4}>Sobre Mim</Heading>
        <Text fontSize="md">Thales Thiago de Barros Moura</Text>
        <Text fontSize="md">Universidade Católica de Pernambuco</Text>
        <Text fontSize="md">Curso: Sistemas para Internet</Text>
        <Text fontSize="md">Período: 3°</Text>
        <Text fontSize="md">Professor: Marcio</Text>
      </Container>

      <Container maxW="container.xl" py={20} id="services">
        <Heading as="h3" size="xl" mb={4}>Nossos Serviços</Heading>
        <Collapse in={showChakraInfo}>
          <Text fontSize="md">Oferecemos uma variedade de serviços para atender às suas necessidades.</Text>
        </Collapse>
      </Container>

      <Collapse in={showChakraInfo}>
        <Container maxW="container.xl" py={20} id="chakra-info">
          <Heading as="h3" size="xl" mb={4}>Sobre o Chakra UI</Heading>
          <Text fontSize="md">Chakra UI é uma biblioteca de componentes simples, modular e acessível construída com React. Ele fornece componentes reutilizáveis, responsivos e fáceis de usar para ajudar você a criar interfaces bonitas e acessíveis em seus aplicativos React.</Text>
        </Container>
      </Collapse>

      <Container maxW="container.xl" py={20} id="contact">
        <Heading as="h3" size="xl" mb={4}>Contato</Heading>
        <Text fontSize="md">Thales.00000847960</Text>
        <Text fontSize="md">Telefone: 4002-8922</Text>
      </Container>
    </Box>
  );
}

export default App;
