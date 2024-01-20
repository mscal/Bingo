import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

export default function WelcomeMessage() {
  const [name, setName] = useState("Stranger");

  useEffect(() => {
    setName(localStorage?.getItem("name") ?? "Stranger");
  }, []);

  return (
    <Text
      color={"#ffffff"}
      textTransform={"capitalize"}
    >
      {`Hi ${name} - Ready to play?`}
    </Text>
  );
}
