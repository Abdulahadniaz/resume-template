import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/resume/about";
import Introduction from "../components/resume/introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
    </>
  );
}
