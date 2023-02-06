import { Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox as="article" cursor="pointer">
      <Link to={`/works/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          style={{ borderRadius: "12px" }}
          placeholder="blur"
        />
        <LinkOverlay as="div">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </Link>
    </LinkBox>
  </Box>
);
