import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H3 = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading as="h3" size="xl" lineHeight={1.2} {...props}>
      {children}
    </Heading>
  );
};

export default H3;
