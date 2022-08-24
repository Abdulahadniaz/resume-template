import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface H2Props extends HeadingProps {
  barAlign?: "center" | "left" | "right";
}

const H2 = ({ children, barAlign, ...props }: PropsWithChildren<H2Props>) => {
  return (
    <Heading
      as="h2"
      size="2xl"
      lineHeight={1.2}
      pos="relative"
      _before={
        barAlign && {
          pos: "absolute",
          content: "''",
          width: 12,
          height: 1,
          bgColor: "auxpink.500",
          top: -8,
          ...getBarPosition({ barAlign }),
        }
      }
      mt={barAlign && 10}
      {...props}
    >
      {children}
    </Heading>
  );
};

const getBarPosition = ({ barAlign }: H2Props) => {
  switch (barAlign) {
    case "center":
      return {
        left: "50%",
        transform: "translateX(-50%)",
      };

    case "right":
      return {
        right: "0",
      };

    default:
      return {
        left: "0",
      };
  }
};

export default H2;
