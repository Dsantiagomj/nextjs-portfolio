import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  // const footPrintImg = `/images/${useColorModeValue('black', 'white')}_logo.png`
  const footPrintImg = `/images/favicon.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={34} height={24} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            Daniel Santiago MJ
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
