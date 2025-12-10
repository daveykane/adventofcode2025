const checkEdgeIntersection = (
  edge: { fromX: number; fromY: number; nextX: number; nextY: number },
  tileA: number[],
  tileB: number[]
) => {
  const minX = Math.min(tileA[0], tileB[0]);
  const maxX = Math.max(tileA[0], tileB[0]);
  const minY = Math.min(tileA[1], tileB[1]);
  const maxY = Math.max(tileA[1], tileB[1]);
  const edgeMinX = Math.min(edge.fromX, edge.nextX);
  const edgeMaxX = Math.max(edge.fromX, edge.nextX);
  const edgeMinY = Math.min(edge.fromY, edge.nextY);
  const edgeMaxY = Math.max(edge.fromY, edge.nextY);

  return !(maxX <= edgeMinX || minX >= edgeMaxX || maxY <= edgeMinY || minY >= edgeMaxY);
};

const findLargestArea = (tiles: number[][], checkGreen: boolean): number => {
  let largestArea = 0;

  const edges = tiles.map(([x, y], index) => ({
    fromX: x,
    fromY: y,
    nextX: index === tiles.length - 1 ? tiles[0][0] : tiles[index + 1][0],
    nextY: index === tiles.length - 1 ? tiles[0][1] : tiles[index + 1][1],
  }));

  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; j < tiles.length; j++) {
      if (i === j || (checkGreen && edges.some((edge) => checkEdgeIntersection(edge, tiles[i], tiles[j])))) continue;

      const xDiff = Math.abs(tiles[i][0] - tiles[j][0]);
      const yDiff = Math.abs(tiles[i][1] - tiles[j][1]);
      const area = (xDiff + 1) * (yDiff + 1);

      if (area > largestArea) largestArea = area;
    }
  }

  return largestArea;
};

export const part1 = (tiles: number[][]): number => findLargestArea(tiles, false);
export const part2 = (tiles: number[][]): number => findLargestArea(tiles, true);
