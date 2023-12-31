import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react"
// import Image from "next/image"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a developer based in the World!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sam Moillic
          </Heading>
          <p>Software and Web programmer</p>
        </Box>
      </Box>

      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/sam.jpg"
          alt="Profile Image"
        />
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Paragraph</Paragraph>
        {/* <NextLink href="/work">

                </NextLink> */}
      </Section>
    </Container>
  )
}

export default Page
