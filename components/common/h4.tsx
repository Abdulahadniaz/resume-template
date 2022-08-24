import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H4 = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading as="h4" fontSize={24} lineHeight={1.5} {...props}>
      {children}
    </Heading>
  );
};

export default H4;
