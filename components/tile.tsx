import { GridItem } from "@chakra-ui/react";

export default function Tile({
  tileValue,
  selected,
  onTileClick,
}: {
  tileValue: string | number | undefined;
  selected: boolean;
  onTileClick: () => void;
}) {
  const free = tileValue === "FREE";

  return (
    <GridItem
      outline={"2px white solid"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color={selected ? "black" : "white"}
      borderRadius={"5px"}
      key={tileValue}
      onClick={onTileClick}
      bg={selected ? "white" : "initial"}
      cursor={"pointer"}
    >
      {tileValue}
    </GridItem>
  );
}
