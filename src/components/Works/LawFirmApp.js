import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import LayoutArticle from "../LayoutArticle";
import photo from "../../Lib/images/testphoto.jfif";

function LawFirmApp() {
  return (
    <Container maxW="container.md">
      <LayoutArticle>
        <Container>
          <Box>
            <Link to="/works">Works</Link>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            incidunt similique sint saepe tempore qui amet asperiores
            perferendis iste temporibus?
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Website
              </Badge>
              <Link to="https://www.google.com/">
                https://www.google.com/ <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Stack
              </Badge>
              <span>ReactJS, NodeJS, MongoDB</span>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Code link
              </Badge>
              <Link to="https://www.google.com/">
                https://www.google.com/ <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <Image borderRadius="lg" w="full" src={photo} alt="law firm" mb={4} />
          <Image borderRadius="lg" w="full" src={photo} alt="law firm" mb={4} />
          <Image borderRadius="lg" w="full" src={photo} alt="law firm" mb={4} />
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default LawFirmApp;
