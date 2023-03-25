import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import Typed from "react-typed";
import profilePhoto from "../Lib/images/fahimPhoto.jpg";
import { motion } from "framer-motion";
import Section from "./Section";
import styled from "@emotion/styled";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as RoutLink } from "react-router-dom";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

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
  "Redux",
  "Next.js",
  "RESTful APIs",
  "HTML",
  "CSS",
  "OOP",
];

const bioSection = {
  paddingLeft: "3.4em",
  textIndent: "-3.4em",
};

const marker = { fontWeight: "bold", marginRight: "1em" };
const paragraph = {
  textAlign: "justify",
  textIndent: "1em",
  hyphens: "auto",
};

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
          I&apos;m a passionate Web Developer, my area of expertise are
          front-end web development. You can talk to me about{" "}
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
            better place. I have gained a solid foundation in Frontend
            development. I am strategic and goal-oriented and always work with
            an end goal in mind, always focusing on learning new technology.
            When I am not writing code I like to spend time watching movies and
            hanging out with my friends and family. Products, websites, tech
            demos — I love using my technical skills to build cool & interesting
            things.
          </Paragraph>
          <Box align="center" my={4}>
            <RoutLink to="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </RoutLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Box style={bioSection}>
            <span style={marker}>[**]</span>I live in Dhaka my childhood
            memorable place in Sirajganj. (Bangladesh)
          </Box>
          <Box style={bioSection}>
            <span style={marker}>[**]</span>
            Completed the Bachelor program in Management at National university,
            Bangladesh.
          </Box>
          <Box style={bioSection}>
            <span style={marker}>[**]</span>
            Completed the Web Development Course Batch-3 2021 at Programming
            Hero with Jhankar mahbub.
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <p style={paragraph}>
            Art, Music, Traveling, Video game, Movie, Book.
          </p>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/fahimchowdhury43" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @fahimchowdhury43
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/fahimchowdhury43/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @fahimchowdhury43
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/FahimCh86229381/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @FahimCh86229381
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <Link
              href="https://drive.google.com/file/d/1flZEJ-1b4N0i7NJOnOJRj6kOE1AVZjx4/view"
              target="_blank"
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Resume
              </Button>
            </Link>
          </Box>
        </Section>
      </Container>
    </motion.article>
  );
}

export default Bio;
