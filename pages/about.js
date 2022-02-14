import {
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Me from '../components/me'
import {
  Horus,
  Colorbeats,
  Koombea,
  Zemoga,
  Makeitreal,
  Dsantiagomj
} from '../components/images'

const About = () => {
  const horus = Horus()
  const colorbeats = Colorbeats()
  const koombea = Koombea()
  const zemoga = Zemoga()
  const makeitreal = Makeitreal()
  const dsantiagomj = Dsantiagomj()
  return (
    <Container mt={10}>
      <Image src="/images/hero.svg" alt="hero" mb={5} />
      <Me />
      <Divider my={6} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Barranquilla, Colombia.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the informatics systems maintenance&apos;s Program in the
          Institucion Universitaria ITSA
        </BioSection>
        <BioSection>
          <BioYear>2018-2019</BioYear>
          Worked at MCA Systems as intern
        </BioSection>
        <BioSection>
          <BioYear>2019-2020</BioYear>
          Worked at Koombea
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Works as a freelance
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works at Zemoga
        </BioSection>
      </Section>
      <Divider my={6} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Text>
          I&apos;m proud to have collaborated with some awesome companies and
          projects
        </Text>
        <SimpleGrid minChildWidth="120px" spacing="40px" my={10}>
          <Image src={horus} alt="horus smart control" />
          <Image src={colorbeats} alt="colorbeats" />
          <Image src={koombea} alt="koombea" />
          <Image src={zemoga} alt="zemoga" />
          <Image src={makeitreal} alt="make it real" />
          <Image src={dsantiagomj} alt="dsantiagomj" />
        </SimpleGrid>
      </Section>
      <Divider my={6} />
    </Container>
  )
}

export default About
