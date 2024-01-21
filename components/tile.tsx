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
  const free = tileValue === "Free";

  return (
    <GridItem
      outline={"2px white solid"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color={selected || free ? "black" : "white"}
      borderRadius={"5px"}
      key={tileValue}
      onClick={onTileClick}
      bg={selected || free ? "white" : "initial"}
      cursor={"pointer"}
    >
      {tileValue}
    </GridItem>
  );
}
