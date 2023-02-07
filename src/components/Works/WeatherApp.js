import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import LayoutArticle from "../LayoutArticle";

import screen1 from "../../Lib/images/screencapture-weather-app-1.png";
import screen2 from "../../Lib/images/screencapture-weather-app-2.png";

function WeatherApp() {
  return (
    <Container maxW="container.md">
      <LayoutArticle>
        <Container>
          <Box>
            <NavLink to="/works">Works</NavLink>
            <span>
              {" "}
              <ChevronRightIcon />{" "}
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
              Weather App <Badge>Webapp</Badge>
            </Heading>
          </Box>
          <p
            style={{ textAlign: "justify", textIndent: "1em", hyphens: "auto" }}
          >
            The app integrates with API sources to provide the country base
            weather report. It also gives us local weather updates with
            temperature, wind speed and weather symbol.
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Live Link
              </Badge>

              <Link href="https://weatherwebapps2.netlify.app/">
                https://weatherwebapps2.netlify.app/{" "}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Technologies
              </Badge>
              <span>TypeScript, ReactJS, Styled-components, Tailwind CSS </span>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Git Source
              </Badge>
              <Link href="https://github.com/fahimchowdhury43/weather-app/">
                https://github.com/fahimchowdhury43/weather-app/{" "}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <Image
            borderRadius="lg"
            w="full"
            src={screen1}
            alt="law firm"
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src={screen2}
            alt="law firm"
            mb={4}
          />
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default WeatherApp;
