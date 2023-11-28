import Head from "next/head"
import NavBar from "../navbar.js"
import { Box, Container, MenuButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sam Moillic - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
