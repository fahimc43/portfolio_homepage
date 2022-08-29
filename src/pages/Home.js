import React from "react";
import { Container } from "@chakra-ui/react";
import Bio from "../components/Bio";

function Home() {
  return (
    <>
      <Container maxW="container.md" pt={24}>
        <Bio />
      </Container>
    </>
  );
}

export default Home;
