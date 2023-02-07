import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Typed from "react-typed";
import profilePhoto from "../Lib/images/fahimPhoto.jpg";
import { motion } from "framer-motion";
import Section from "./Section";
import styled from "@emotion/styled";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const talkAbout = [
  "React",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "GraphQL",
  "Redux",
  "Next.js",
  "RESTful APIs",
  "HTML",
  "CSS",
];

function Bio() {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="start"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          I&apos;m a passionate Web Developer, my area of expertise are MERN
          Stack web development. You can talk to me about{" "}
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={talkAbout}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
          .
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Fahim Chowdhury
            </Heading>
            <p>Digital Maker ( Developer / Builder )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={profilePhoto}
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I create relevant websites and web apps to make the internet a
            better place. The technologies I work with are JavaScript,
            TypeScript focused on React.js, Node.js, and Express.js, MongoDB. I
            use code not only to do my day-to-day job, but also to solve
            everyday problems I come across. When I am not writing code I like
            to spend time watching movie and hanging out with my friends.
            Products, websites, tech demos — I love using my technical skills to
            build cool & interesting things.
          </Paragraph>
          <Box align="center" my={4}>
            <Link to="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>
      </Container>
    </motion.article>
  );
}

export default Bio;
