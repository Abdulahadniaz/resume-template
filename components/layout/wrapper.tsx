import { Box, BoxProps, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Wrapper = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Box as="section" py={{ base: 8, md: 16 }} {...props}>
      <Container
        maxW={{
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Wrapper;
