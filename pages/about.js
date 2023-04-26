import {
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear, BioElement } from '../components/bio'
import Me from '../components/me'
import {
  Horus,
  Colorbeats,
  Koombea,
  Zemoga,
  Makeitreal,
  Globant
} from '../components/images'

const About = () => {
  const horus = Horus()
  const colorbeats = Colorbeats()
  const koombea = Koombea()
  const zemoga = Zemoga()
  const makeitreal = Makeitreal()
  const globant = Globant()
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
          <BioElement>
          Born in Barranquilla, Colombia.
          </BioElement>
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <>
            <BioElement>
            Completed the informatics systems maintenance&apos;s Program at ITSA.
            </BioElement>
            <BioElement>
              Worked at MCA Systems as intern.
            </BioElement>
            <BioElement>
              Completed the Ruby on Rails web development Bootcamp in Make it Real.
            </BioElement>
          </>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          <BioElement>
            Finished my internship at MCA Systems.
          </BioElement>
          <BioElement>
            Started as frontend developer at Koombea.
          </BioElement>
          <BioElement>
            Completed the Javascript web development Bootcamp in Make it Real.
          </BioElement>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          <BioElement>
            Finished working at Koombea.
          </BioElement>
          <BioElement>
            Started working at Zemoga as web developer.
          </BioElement>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <BioElement>
            Completed the Management information systems&apos;s Program at ITSA.
          </BioElement>
          <BioElement>
            Worked as Partial time mentor for TOP program bootcamp in Make it Real.
          </BioElement>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <BioElement>
            Finished Working at Zemoga.
          </BioElement>
          <BioElement>
            Worked as Partial time mentor for TOP program bootcamp at Make it Real.
          </BioElement>
          <BioElement>
            Started a new position at Globant
          </BioElement>
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          <BioElement>
            Finished working at Globant.
          </BioElement>
          <BioElement>
            Working as mentor for TOP candidates program bootcamp at Make it Real.
          </BioElement>
          <BioElement>
            Return as Senior Developer at Zemoga.
          </BioElement>
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
          <Image src={globant} alt="globant" />
        </SimpleGrid>
      </Section>
      <Divider my={6} />
    </Container>
  )
}

export default About
