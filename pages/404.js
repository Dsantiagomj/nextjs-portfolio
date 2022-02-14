import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container my={40}>
      <Image src="/images/404.png" alt="404" />
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="blue">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
export { getInitialProps } from '../components/chakra'
