import { useState } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Me from '../components/me'
import normalHeroImage from '../public/images/avatar.svg'
import hoverHeroImage from '../public/images/hover_avatar.svg'

const HomePage = () => {
  const [imageSrc, setImageSrc] = useState(() => normalHeroImage)
  const title = '< Hello World />'

  const handleHover = (image) => {
    setImageSrc(image)
  }

  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} align="center">
          <Image
            src={imageSrc.src}
            alt="hero"
            display="inline-block"
            maxWidth={150}
            onMouseEnter={() => handleHover(hoverHeroImage)}
            onMouseLeave={() => handleHover(normalHeroImage)}
          />
          <Heading as="h2" variant="page-title" align="center" pb={5}>
            {title}
          </Heading>
          <Text align="center" fontSize="lg">
            I&apos;m a passionate digital craftsman always learning something
            new
          </Text>
        </Box>
      </Box>
      <Me />
      <Divider my={6} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          I&apos;m a software developer based in Barranquilla with a passion for
          building digital services/stuff i want. A fan of learning and
          interacting with new technologies. when i&apos;m not online, i love to
          play videogames, play football and expend time with my dog. these are
          the skills I have learned and improved during my journey.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://docs.google.com/document/d/1gNzzFDvFDE_7reufsQt8Oqi4ozO_--AHzdryvmtXcXA/export?format=pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Download my CV
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Divider my={6} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Frontend
        </Heading>
        <Paragraph>
          My main path, I&apos;ve worked mostly as a frontend developer and I'm
          loving it. I like to bring ideas to life in the browser.
        </Paragraph>
        <Text fontSize="sm" color="blue.400" fontWeight="bold">
          Some languages & tools I&apos;ve learned and used:
        </Text>
        <Text fontSize="sm">
          JavaScript, Sass, BEM, JQuery, ReactJs, Redux, GatsbyJs, NextJS, Vue,
          Nuxt, Shopify
        </Text>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Mobile
        </Heading>
        <Paragraph>
          I have crossed ways with this path a couple of times. I&apos;m very
          curious about this path and looking forward to digging into it.
        </Paragraph>
        <Text fontSize="sm" color="blue.400" fontWeight="bold">
          Some languages & tools I&apos;ve learned and used:
        </Text>
        <Text fontSize="sm">JavaScript, React Native, Expo, Cordova</Text>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Backend
        </Heading>
        <Paragraph>
          Technologies that I&apos;ve learned on my journey. Some of them
          crucial on my day by day, others looking forward to using again.
        </Paragraph>
        <Text fontSize="sm" color="blue.400" fontWeight="bold">
          Some languages & tools I&apos;ve learned and used:
        </Text>
        <Text fontSize="sm">
          Terminal, Git, Github, Ruby, Ruby on Rails, JavaScript, NodeJs,
          ExpressJs, Python, Django, MongoDB, PostgreSQL.
        </Text>
        <Box align="center" my={4}>
          <NextLink href="/about">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              More about me
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Divider my={6} />
    </Container>
  )
}

export default HomePage
