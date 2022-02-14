import NextLink from 'next/link'
import { Link, useColorModeValue } from '@chakra-ui/react'

const LinkItem = ({ href, path, _target, children, variant, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'blue.200' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        variant={variant}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem
