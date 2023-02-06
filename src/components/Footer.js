import { Box } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" p="6">
      &copy; {new Date().getFullYear()} Fahim Chowdhury. All Rights Reserved.
    </Box>
  );
}

export default Footer;
