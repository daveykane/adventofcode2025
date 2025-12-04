import { getGrid, getNeighbours } from "../utils/index.ts";

const findForkliftsToRemove = (grid: string[][]) => {
  const toRemove: number[][] = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "@") {
        const neighbours = getNeighbours([y, x], grid[y].length, grid.length, true);
        if (neighbours.filter(([nx, ny]) => grid[ny][nx] === "@").length < 4) toRemove.push([y, x]);
      }
    }
  }

  return toRemove;
};

export const part1 = (input: string) => findForkliftsToRemove(getGrid<string>(input)).length;
export const part2 = (input: string) => {
  let count = 0;
  const grid = getGrid<string>(input);

  while (true) {
    const toRemove = findForkliftsToRemove(grid);

    if (toRemove.length === 0) break;

    count += toRemove.length;
    for (const [y, x] of toRemove) grid[y][x] = ".";
  }

  return count;
};
