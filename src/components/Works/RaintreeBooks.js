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

import screen1 from "../../Lib/images/screencapture-lms-app-1.png";
import screen2 from "../../Lib/images/screencapture-lms-app-2.png";

function RaintreeBooks() {
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
              Learning Management System <Badge>webapp</Badge>
            </Heading>
          </Box>
          <p
            style={{ textAlign: "justify", textIndent: "1em", hyphens: "auto" }}
          >
            The website is designed to be mobile-friendly and accessible to
            users with disabilities. SwiperJS is used to create a responsive,
            touch-enabled carousel or slider component for displaying course
            content or other information.
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Live Link
              </Badge>

              <Link href="https://lms-app-e1b8b.web.app/" target="_blank">
                https://lms-app-e1b8b.web.app/ <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Technologies
              </Badge>
              <span>React js, React router-6, Tailwind CSS, Swiper Js</span>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Git Source
              </Badge>
              <Link
                href="https://github.com/fahimchowdhury43/lms_client"
                target="_blank"
              >
                https://github.com/fahimchowdhury43/lms_client{" "}
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

export default RaintreeBooks;
