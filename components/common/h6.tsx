import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H6 = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading
      as="h6"
      size="xs"
      lineHeight={1.5}
      letterSpacing={2}
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default H6;
