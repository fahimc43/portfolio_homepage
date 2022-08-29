/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";

function Logo() {
  return (
    <Link to="/">
      <Text
        fontSize="20px"
        fontWeight="bold"
        ml={3}
        color={useColorModeValue("#4A5568", "rgba(255, 255, 255, 0.92)")}
        fontFamily='M PLUS Rounded 1c", sans-serif'
      >
        Fahim Chowdhury
      </Text>
    </Link>
  );
}

export default Logo;
