import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { SiNextdotjs, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import LinkItem from './LinkItem'
import { Dsantiagomj } from './images'

const Footer = () => {
  const dsantiagomj = Dsantiagomj()
  return (
    <Box as="footer" my={10}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        bg={useColorModeValue('gray.100', 'whiteAlpha.200')}
      >
        <Box display={{ md: 'flex' }} align="center" alignItems="center">
          <Box flexGrow={1} mb={5} mt={5}>
            <Heading as="h3" size="md">
              Start a project
            </Heading>
            <Text fontSize="sm">
              interested in working together? contact me
            </Text>
          </Box>
          <Box flexGrow={1}>
            <NextLink href="/contact">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Let&apos;s talk
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Box>
      <Box align="center">
        <Image src={dsantiagomj} width="120px" alt="logo" />
        <Text fontSize="sm">
          Living, learning & leveling up one day at a time
        </Text>
        <Stack
          alignItems="flex-end"
          display="inline-flex"
          flexDirection="row"
          justifyContent="center"
          flexGrow={1}
          width="auto"
          style={{ gap: 18 }}
        >
          <LinkItem
            href="https://www.github.com/dsantiagomj/"
            _target="_blank"
            color="blue.200"
          >
            <SiGithub />
          </LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/dsantiagomj/"
            _target="_blank"
            color="blue.200"
          >
            <SiLinkedin />
          </LinkItem>
          <LinkItem
            href="mailto:dsantiagomj@gmail.com"
            _target="_blank"
            color="blue.200"
          >
            <SiGmail />
          </LinkItem>
        </Stack>
        <Text fontSize="xs">
          handcrafted by @dsantiagomj - © {new Date().getFullYear()}
        </Text>
        <Text
          fontSize="xs"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
        >
          Made with <SiNextdotjs />
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
