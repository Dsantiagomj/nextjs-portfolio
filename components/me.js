import { Box, Heading, Text, Image } from '@chakra-ui/react'
import ProfileImage from '../public/images/profile.png'
const Me = () => {
  return (
    <Box display={{ md: 'flex' }} mt={10}>
      <Box flexGrow={1} textAlign={{ base: 'center', md: 'start' }}>
        <Heading as="h3" size="lg">
          Daniel Santiago Muñoz
        </Heading>
        <Text>I&apos;m a software developer based in Colombia!</Text>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Image
          borderColor="blue.400"
          borderWidth={1.5}
          borderStyle="dashed"
          maxWidth="100px"
          display="inline-block"
          boxSize="100px"
          borderRadius="full"
          alt="profile image"
          src={ProfileImage}
        />
      </Box>
    </Box>
  )
}

export default Me
