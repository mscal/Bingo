import { Button, useClipboard, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type ShareStates = {
  numberState: string[];
  selectionState: string[];
};

const ShareBoard = ({ numberState, selectionState }: ShareStates) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("test");
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    let combinedStates = {
      numberState: numberState,
      selectionState: selectionState,
    };
    const json = JSON.stringify(combinedStates);
    const encodedUrl = encodeURIComponent(json);

    setValue(
      `${window.location.origin}/${router.pathname}?share=${encodedUrl}` ?? ""
    );
  }, [numberState, selectionState]);

  function handleCopy() {
    onCopy();
    toast({
      title: value ? "Board Copied" : "Failed to copy",
      description: value
        ? "You may send this link to showcase the current board state"
        : "Something went wrong with the copy. try again or reset the game.",
      status: value ? "success" : "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return <Button onClick={handleCopy}>Share Bingo Board</Button>;
};

export default ShareBoard;
