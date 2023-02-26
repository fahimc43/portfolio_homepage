import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import { WorkGridItem } from "../components/GridItem";

import lawfirm from "../Lib/images/lawfirm.png";
import lms from "../Lib/images/lms-cover.png";
import expensesTrucker from "../Lib/images/expensesTrucker.png";
import weatherApp from "../Lib/images/weatherApp.png";
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
                thumbnail={lawfirm}
              >
                A legal service related full stack web application. Users and
                admins can manage their activities, with role based
                authentication system.
              </WorkGridItem>
            </Section>
            <Section delay={0.2}>
              <WorkGridItem
                id="learning_management_system"
                title="Learning Management"
                thumbnail={lms}
              >
                The website is designed to be mobile-friendly and accessible to
                users with disabilities. touch-enabled carousel or slider
                component for displaying course content or other information.
              </WorkGridItem>
            </Section>
            <Section delay={0.3}>
              <WorkGridItem
                id="expenses_tracker_app"
                title="Expenses Tracker App"
                thumbnail={expensesTrucker}
              >
                The expense tracker app is likely to be a good one for tracking
                our expenses. We can track our expenses by interacting with a
                different year.
              </WorkGridItem>
            </Section>
            <Section delay={0.4}>
              <WorkGridItem
                id="weather_app"
                title="Weather App"
                thumbnail={weatherApp}
              >
                The app integrates with API sources to provide the country base
                weather report. It also gives us local weather updates with
                temperature, wind speed and weather symbol.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </LayoutArticle>
    </Container>
  );
}

export default Works;
