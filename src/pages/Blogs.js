import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { BlogGridItem } from "../components/GridItem";
import LayoutArticle from "../components/LayoutArticle";
import Section from "../components/Section";

import arrayIteration from "../Lib/images/arrayIteration.png";
import importantTerms from "../Lib/images/importantTerms.png";
import mostImportant from "../Lib/images/mostImportant.png";
import reactDom from "../Lib/images/reactDom.png";
function Blogs() {
  return (
    <Container maxW="container.md">
      <LayoutArticle>
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Blogs
          </Heading>
          <Section delay={0.1}>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <BlogGridItem
                title="React is the second loved frontend technology after that JavaScript"
                thumbnail={reactDom}
                href="https://fahimc43.medium.com/react-is-the-second-loved-frontend-technology-after-that-javascript-f9c0243b6142"
              />
              <BlogGridItem
                title="Most Important Concept of JavaScript for Beginners"
                thumbnail={mostImportant}
                href="https://fahimc43.medium.com/most-important-concept-of-javascript-for-beginners-f821845b72dd"
              />
              <BlogGridItem
                title="Important Terms of JavaScript and Web Application"
                thumbnail={importantTerms}
                href="https://fahimc43.medium.com/important-terms-of-javascript-and-web-application-6b319ddbae1e"
              />
              <BlogGridItem
                title="The Methods of Array Iteration Illustration"
                thumbnail={arrayIteration}
                href="https://fahimc43.medium.com/the-methods-of-array-iteration-illustration-6ba403fbd916"
              />
            </SimpleGrid>
          </Section>
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default Blogs;
