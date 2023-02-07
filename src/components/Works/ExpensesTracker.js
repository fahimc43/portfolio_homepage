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

import screen1 from "../../Lib/images/screencapture-expensestrucker-1.png";

function ExpensesTracker() {
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
              Raintree book shop <Badge>e-commerce</Badge>
            </Heading>
          </Box>
          <p
            style={{ textAlign: "justify", textIndent: "1em", hyphens: "auto" }}
          >
            A simple and Interactive shopping cart. We will be able to change
            the product quantity and price dynamically. I know how to improve
            e-commerce related site.
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Live Link
              </Badge>

              <Link href="https://expensestrucker.netlify.app/">
                https://expensestrucker.netlify.app/{" "}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Technologies
              </Badge>
              <span>ReactJS, CSS3</span>
            </ListItem>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Git Source
              </Badge>
              <Link href="https://github.com/fahimchowdhury43/expenses-trucker/">
                https://github.com/fahimchowdhury43/expenses-trucker/{" "}
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
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default ExpensesTracker;
