import React from "react";
import { Box, Image, Badge, Link, WrapItem } from "@chakra-ui/react";

type Sizes = 'sm' | 'md' | 'lg';

interface ComponentProps {
  onSelect?: () => void;
  coverUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  secondary?: string;
  width?: {[key in Sizes]: string}
}
function Card({
  coverUrl,
  title,
  subtitle,
  description,
  secondary,
  onSelect,
  width
}: ComponentProps) {
  const handleSelect = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (onSelect) onSelect();
  };
  return (
    <WrapItem
      onClick={handleSelect}
      width={{ base: "100%", ...width }}
    >
      <Box bg="white" boxShadow="md" w="100%">
        <Box borderRadius="sm" overflow="hidden">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              transform="scale(1.0)"
              src={coverUrl}
              alt="album cover"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Link>
        </Box>

        <Box p="6">
          <Box
            display="flex"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {title}
            </Box>
            <Badge borderRadius="full" px="2" colorScheme="gray">
              {secondary}
            </Badge>
          </Box>

          <Box as="span" color="gray.600">
            {subtitle}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Box fontSize="sm">{description}</Box>
          </Box>
        </Box>
      </Box>
    </WrapItem>
  );
}

export default Card;
