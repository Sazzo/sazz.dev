import { Flex, Text, Stack, HStack } from "@chakra-ui/react";
import { Github, Twitter } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/material";
import React from "react";
import SazzLogo from "../common/SazzLogo";

export default function Header() {
  return (
    <main className="header">
      <div className="space-background"></div>

      <Flex
        paddingTop={{
          base: "35vh",
          md: "40vh",
          xl: "40vh",
        }}
        paddingLeft={{
          base: "0rem",
          md: "7rem",
          xl: "7rem",
        }}
        flexDirection="column"
        color="white"
      >
        <Stack
          spacing={9}
          justifyContent={{
            base: "center",
            md: "normal",
            xl: "normal",
          }}
          alignItems={{
            base: "center",
            md: "normal",
            xl: "normal",
          }}
        >
          <SazzLogo width="266px" />
          <Text
            fontWeight="200"
            fontStyle="normal"
            fontSize="2xl"
            textAlign={{
              base: "center",
              md: "initial",
              xl: "initial",
            }}
          >
            A kid who plays around with web development.
          </Text>
          <HStack spacing={19}>
            <a href="https://twitter.com/FelipeSazz">
              <Twitter size="35px" />
            </a>
            <a href="https://github.com/Sazzo">
              <Github size="35px" />
            </a>
            <a href="mailto:sazz@ritsu.fun">
              <Email size="35px" />
            </a>
          </HStack>
        </Stack>
      </Flex>
    </main>
  );
}
