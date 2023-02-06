import React from "react";
import { motion } from "framer-motion";
import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import { WorkGridItem } from "../components/GridItem";

import testPhoto from "../Lib/images/testphoto.jfif";
import LayoutArticle from "../components/LayoutArticle";

function Works() {
  return (
    <Container maxW="container.md">
      <LayoutArticle>
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Works
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="law_firm"
                title="Law Firm App"
                thumbnail={testPhoto}
              >
                consectetur adipisicing elit. Rem repudiandae eaque magni iste
                expedita doloribus.
              </WorkGridItem>
            </Section>
            <Section delay={0.2}>
              <WorkGridItem
                id="raintree_book_shop"
                title="Raintree Book Shop "
                thumbnail={testPhoto}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam quaerat tenetur porro eos optio ullam perspiciatis
                nobis.
              </WorkGridItem>
            </Section>
            <Section delay={0.3}>
              <WorkGridItem
                id="expense_tracker_app"
                title="Expense Tracker App"
                thumbnail={testPhoto}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                cumque, excepturi voluptates voluptatum neque quas perspiciatis
                sapiente eius?
              </WorkGridItem>
            </Section>
            <Section delay={0.4}>
              <WorkGridItem
                id="weather_app"
                title="Weather App"
                thumbnail={testPhoto}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum nisi, possimus sapiente illum eum earum ratione. Et,
                similique.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default Works;
