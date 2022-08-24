import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H1 = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading as="h1" fontSize={{ base: 60, lg: 120 }} lineHeight={1} {...props}>
      {children}
    </Heading>
  );
};

export default H1;
