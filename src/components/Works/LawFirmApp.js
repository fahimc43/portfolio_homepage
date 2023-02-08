import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import LayoutArticle from "../LayoutArticle";
import screen1 from "../../Lib/images/screencapture-1.png";
import screen2 from "../../Lib/images/screencapture-2.png";
import screen3 from "../../Lib/images/screencapture-law-firm3.png";
import screen4 from "../../Lib/images/screencapture-law-firm-5.png";
import screen5 from "../../Lib/images/screencapture-law-firm-7.png";

function LawFirmApp() {
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
              Law Firm <Badge>webapp</Badge>
            </Heading>
          </Box>
          <p
            style={{ textAlign: "justify", textIndent: "1em", hyphens: "auto" }}
          >
            A legal service related full stack web application. Users and admins
            can manage their activities, with role based authentication system.
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Live Link
              </Badge>

              <Link href="https://law-firm-d6e55.web.app/" target="_blank">
                https://law-firm-d6e55.web.app/ <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Technologies
              </Badge>
              <span>ReactJS, NodeJS, MongoDB, Tailwind CSS</span>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Git Source
              </Badge>
              <Link
                href="https://github.com/fahimchowdhury43/law-firm-client/"
                target="_blank"
              >
                https://github.com/fahimchowdhury43/law-firm-client/{" "}
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
          <Image
            borderRadius="lg"
            w="full"
            src={screen3}
            alt="law firm"
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src={screen4}
            alt="law firm"
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src={screen5}
            alt="law firm"
            mb={4}
          />
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default LawFirmApp;
