import { Button, Grid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Tile from "./tile";
import WelcomeMessage from "./welcome-message";
import ClearBoardDialog from "./clear-board-dialog";

const BingoGrid = () => {
  //initial setup
  const initialGrid = Array(25).fill(undefined);
  initialGrid[12] = "Free";

  //initial grid numbers
  const [allNumbers, setAllNumbers] = useState(initialGrid);
  //selection state of the grid
  const [selectedState, setSelectedState] = useState(Array(25).fill(false));

  //checks for selected tiles
  function areTilesSelected() {
    return selectedState.some((selected) => selected === true);
  }

  //Generates new set of numbers & updates grid list
  function generateNumbers(gridItems: number) {
    let uniqueNumbers = new Set();

    while (uniqueNumbers.size < gridItems) {
      uniqueNumbers.add(Math.floor(Math.random() * 100) + 1);
    }

    let generatedNumber = Array.from(uniqueNumbers);

    let updatedGrid = initialGrid.map((item) => {
      if (item === undefined) {
        return generatedNumber.pop();
      }
      return item;
    });

    setAllNumbers(updatedGrid);
  }

  //handles tile click
  function handleTileClick(index: number) {
    const newSelectedState = selectedState.slice();
    newSelectedState[index] = !selectedState[index];
    setSelectedState(newSelectedState);
  }

  //handles clearing grid slection state and regenerating
  function handleClear() {
    setSelectedState(Array(25).fill(false));
    generateNumbers(24);
  }

  function shareBoard() {}

  return (
    <Stack>
      <WelcomeMessage />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap={6}
        outline={"3px white solid"}
        borderRadius={"8px"}
        minHeight={"300px"}
        width={"90vw"}
        maxWidth={"300px"}
        p={2}
      >
        {allNumbers?.map((item: number | string | undefined, index) => {
          return (
            <Tile
              tileValue={item}
              selected={selectedState[index]}
              onTileClick={() => handleTileClick(index)}
              key={item}
            />
          );
        })}
      </Grid>
      {areTilesSelected() ? (
        <ClearBoardDialog onConfirm={() => handleClear()} />
      ) : (
        <Button onClick={() => generateNumbers(24)}>Generate Numbers</Button>
      )}

      <Button onClick={() => shareBoard()}>Share Bingo Board</Button>
    </Stack>
  );
};

export default BingoGrid;
