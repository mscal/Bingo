import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Container, Input, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";

export default function NameInput() {
  const [value, setValue] = useState("");
  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setValue(event.target.value);
  const router = useRouter();

  const handleSubmit = () => {
    localStorage.setItem("name", value);
    router.push("bingo-game");
  };

  return (
    <Container>
      <Stack
        alignItems={"center"}
        m={2}
      >
        <Image
          src="/assets/bingo.svg"
          height={200}
          width={200}
          alt={"bingo"}
        />
      </Stack>
      <Stack
        bg={"white"}
        p={2}
        borderRadius={"8px"}
      >
        {" "}
        <Text mb="8px">Given Name:</Text>
        <Input
          focusBorderColor="black"
          value={value}
          onChange={handleChange}
          placeholder="Enter your name"
          size="sm"
          variant="filled"
          required={true}
        />
        <Button
          onClick={() => handleSubmit()}
          rightIcon={<ArrowForwardIcon />}
        >
          Play
        </Button>
      </Stack>
    </Container>
  );
}
