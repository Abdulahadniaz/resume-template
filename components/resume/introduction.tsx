import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import H1 from "../common/h1";
import Wrapper from "../layout/wrapper";
import * as resumeData from "../../resume.json";
import H2 from "../common/h2";
import H3 from "../common/h3";

const Introduction = () => {
  const { fullname, role, socials, biodata } = resumeData;

  const { email, education, experiences, extras } = biodata;

  const { institutions } = education;
  const { items } = experiences;

  const details = items.map((i) => i.details);
  const workSections = details.map((i) => i.sections);

  const { section } = extras;

  return (
    <Wrapper bgColor={useColorModeValue("#0e0e10", "")}>
      <Flex justify="space-between" align="center">
        <Box>
          <H2 color={useColorModeValue("white", "")} fontWeight="bold">
            {fullname}
          </H2>
          <H3
            color={useColorModeValue("white", "")}
            fontWeight="bold"
            size={{
              base: "md",
              lg: "lg",
            }}
          >
            {role}
          </H3>
        </Box>
        <Box>
          <Avatar
            src="https://bit.ly/dan-abramov"
            size={{
              base: "xl",
              lg: "2xl",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Introduction;
