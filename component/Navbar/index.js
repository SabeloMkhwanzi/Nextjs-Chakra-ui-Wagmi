import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Tabs,
  TabList,
  Tab,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

import { WalletModel } from "..";

//import { Logo } from "../../public"

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box shadow="2xl" borderRadius="3xl">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="solid"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />

                <WalletModel />
                <IconButton
                  size="md"
                  w="full"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="solid"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                />
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="wed3.0"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <VisuallyHidden>NCW</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontWeight="semibold" fontSize="2xl">
              NCW
            </chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <WalletModel />

              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="solid"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </HStack>
            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            ></chakra.a>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Menu
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Menu
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Menu
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Menu
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Menu
            </Tab>{" "}
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<AiOutlineSearch />}
            />
            <Input borderRadius="full" type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
}
