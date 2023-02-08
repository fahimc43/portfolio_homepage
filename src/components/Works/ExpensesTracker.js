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
              Expenses Tracker <Badge>Web app</Badge>
            </Heading>
          </Box>
          <p
            style={{ textAlign: "justify", textIndent: "1em", hyphens: "auto" }}
          >
            The expense tracker app is likely to be a good one for tracking our
            expenses. We can track our expenses by interacting with a different
            year.
          </p>
          <List ml={4} my={4}>
            <ListItem>
              <Badge colorScheme="green" mr={2}>
                Live Link
              </Badge>

              <Link href="https://expensestrucker.netlify.app/" target="_blank">
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
              <Link
                href="https://github.com/fahimchowdhury43/expenses-trucker/"
                target="_blank"
              >
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
