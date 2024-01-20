import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <Flex
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"red.400"}
    >
      {children}
    </Flex>
  );
}
