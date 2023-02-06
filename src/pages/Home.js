import React from "react";
import { Container } from "@chakra-ui/react";
import Bio from "../components/Bio";

function Home() {
  return (
    <>
      <Container maxW="container.md">
        <Bio />
      </Container>
    </>
  );
}

export default Home;
