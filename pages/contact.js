import { useRef } from 'react'
import NextLink from 'next/link'
import {
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Box
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Contact = () => {
  const request = process.env.NEXT_PUBLIC_CONTACT_URL

  const nameInput = useRef('')
  const emailInput = useRef('')
  const commentInput = useRef('')

  const isEnabled =
    !!nameInput.current.value &&
    !!emailInput.current.value &&
    !!commentInput.current.value &&
    commentInput.current.value.length >= 20

  return (
    <Container>
      <Heading as="h2" size="lg" my={10}>
        Thanks for taking the time to reach out.
      </Heading>
      <Heading as="h3" variant="section-title">
        Send me a message
      </Heading>
      <Text mb={3}>
        Complete the form with your information and send me a email to start
        talking about your idea.
      </Text>
      <form action={request} method="POST">
        <Box display={{ md: 'inline-flex' }} style={{ gap: 10 }} w="100%">
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              ref={nameInput}
              type="text"
              name="name"
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              ref={emailInput}
              type="email"
              name="email"
              isRequired
            />
          </FormControl>
        </Box>
        <FormControl my={4}>
          <FormLabel htmlFor="message">Your message</FormLabel>
          <Textarea
            id="message"
            ref={commentInput}
            name="message"
            resize="vertical"
            isRequired
          />
        </FormControl>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="blue"
          type="submit"
          isDisabled={!isEnabled}
        >
          Send message
        </Button>
      </form>
      <Divider my={6} />
      <Heading as="h3" variant="section-title">
        Let&apos;s setup a call
      </Heading>
      <Text mb={3}>
        Schedule a 30 minute meeting with me where we can meet eachother and
        talk about your idea, next time coffee is on me.
      </Text>
      <NextLink href="https://calendly.com/dsantiagomj/30min?month=2022-02">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
          Schedule a meeting
        </Button>
      </NextLink>
      <Divider my={6} />
    </Container>
  )
}

export default Contact
