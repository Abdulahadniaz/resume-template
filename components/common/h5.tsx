import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H5 = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading as="h5" size="md" lineHeight={1.5} {...props}>
      {children}
    </Heading>
  );
};

export default H5;
