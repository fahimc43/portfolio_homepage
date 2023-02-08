/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { NavLink as RouterLink, Link as MenuLink } from "react-router-dom";
import Logo from "./Logo";
import { IoLogoGithub } from "react-icons/io5";
import ToggleButton from "./ToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = (props) => (
  <RouterLink
    {...props}
    style={({ isActive }) => {
      return {
        padding: "10px",
        backgroundColor: isActive ? "#88CCCA" : undefined,
        color: isActive
          ? "#202023"
          : useColorModeValue("#4A5568", "rgba(255, 255, 255, 0.92)"),
      };
    }}
  />
);

function Navbar() {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"} p="10px">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={5}
          ml={5}
        >
          <Link as={LinkItem} to="/works" p={2}>
            Works
          </Link>
          <Link as={LinkItem} to="/blogs" p={2}>
            Blogs
          </Link>
          <Link
            as={Link}
            href="https://github.com/fahimchowdhury43"
            target="_blank"
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
          >
            <IoLogoGithub />
            GitHub
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} to="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} to="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} to="/blogs">
                  blogs
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/fahimchowdhury43"
                  target="_blank"
                >
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
