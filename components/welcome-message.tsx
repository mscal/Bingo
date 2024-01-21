import { useEffect, useState } from "react";
import { Skeleton, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function WelcomeMessage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const nameStorage = localStorage?.getItem("name");
    setName(
      `Hi ${nameStorage ?? "Stranger"} - Ready to play?` ||
        "Hi Stranger - Ready to play?"
    );
  }, []);

  return (
    <Heading
      as="h1"
      size="sm"
      color={"#ffffff"}
      textTransform={"capitalize"}
    >
      {name}
    </Heading>
  );
}
