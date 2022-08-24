import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  HStack,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Wrapper from "../layout/wrapper";
import * as resumeData from "../../resume.json";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContacts } from "react-icons/Md";
import { AiOutlineLinkedin } from "react-icons/Ai";

import H3 from "../common/h3";
import H4 from "../common/h4";
import Link from "next/link";
import H5 from "../common/h5";

const About = () => {
  const { fullname, role, socials, biodata } = resumeData;

  const { email, professionalsummary, education, experiences, extras } =
    biodata;

  const { sections } = professionalsummary;
  console.log(sections);

  const { institutions } = education;
  const { items } = experiences;

  const details = items.map((i) => i.details);
  const workSections = details.map((i) => i.sections);

  const { section } = extras;

  return (
    <Wrapper bgColor={useColorModeValue("#18181b", "")}>
      <Flex justify="space-between" align="center">
        <VStack align="left" w="50%">
          <HStack display="flex" justifyContent="left" alignItems="end">
            <Icon as={CgProfile} color="white" w="32px" h="32px" />
            <H3
              color={useColorModeValue("white", "")}
              fontWeight="bold"
              size="lg"
            >
              About Me
            </H3>
          </HStack>
          <Box>
            {sections.map((sec, key) => (
              <Text color={useColorModeValue("white", "")}>{sec}</Text>
            ))}
          </Box>
        </VStack>
        <VStack w="50%" align="left">
          <HStack display="flex" justifyContent="left">
            <Icon as={MdOutlineContacts} color="white" w="32px" h="32px" />
            <H3
              color={useColorModeValue("white", "")}
              fontWeight="bold"
              size="lg"
            >
              Contact Information
            </H3>
          </HStack>
          <Box>
            {socials.map((social, key) => {
              return (
                <Box key={key} display="flex">
                  {/* <H5 color={useColorModeValue("white", "")}>
                    {social.title}
                    {": "}
                  </H5> */}

                  <Link href={social.url} passHref>
                    <ChakraLink target="_blank">
                      <Text color={useColorModeValue("white", "")}>
                        {social.url}
                      </Text>
                    </ChakraLink>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </VStack>
      </Flex>
    </Wrapper>
  );
};

export default About;
