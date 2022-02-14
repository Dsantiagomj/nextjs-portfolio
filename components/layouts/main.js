import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daniel Santiago Muñoz's homepage" />
        <meta name="author" content="Daniel Santiago Muñoz" />
        <meta name="author" content="dsantiagomj" />
        <meta rel="apple-touch-icon" href="favicon.png" />
        <meta rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <meta name="twitter:site" content="@dsantiagomj" />
        <meta name="twitter:creator" content="@dsantiagomj" />
        <meta
          property="og:site_name"
          content="Daniel Santiago Muñoz's homepage"
        />
        <meta property="og:type" content="website" />
        <title>Daniel Santiago Muñoz - Homepage </title>
      </Head>

      <Container maxW="container.md">
        <Navbar path={router.asPath}/>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
