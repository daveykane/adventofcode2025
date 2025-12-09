const getDistances = (boxes: number[][]) => {
  const circuits: number[][] = boxes.map((_, index) => [index]);
  const distances: { distance: number; boxes: [number, number] }[] = [];

  for (let indexA = 0; indexA < boxes.length - 1; indexA++) {
    for (let indexB = indexA + 1; indexB < boxes.length; indexB++) {
      const [x1, y1, z1] = boxes[indexA];
      const [x2, y2, z2] = boxes[indexB];
      const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);

      distances.push({ distance, boxes: [indexA, indexB] });
    }
  }

  return { circuits, distances: distances.sort((a, b) => a.distance - b.distance) };
};

const makeConnections = (
  numConnections: number,
  circuits: number[][],
  distances: { distance: number; boxes: [number, number] }[]
) => {
  for (let i = 0; i < numConnections && i < distances.length; i++) {
    const circuitAIndex = circuits.findIndex((circuit) => circuit.includes(distances[i].boxes[0]));
    const circuitBIndex = circuits.findIndex((circuit) => circuit.includes(distances[i].boxes[1]));

    if (circuitAIndex !== circuitBIndex) {
      circuits[circuitAIndex].push(...circuits[circuitBIndex]);
      circuits.splice(circuitBIndex, 1);
    }

    if (circuits.length === 1) return [distances[i].boxes[0], distances[i].boxes[1]];
  }
};

export const part1 = (boxes: number[][], numConnections: number): number => {
  const { circuits, distances } = getDistances(boxes);
  makeConnections(numConnections, circuits, distances);

  return circuits
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .reduce((total, circuit) => total * circuit.length, 1);
};

export const part2 = (boxes: number[][]): number => {
  const { circuits, distances } = getDistances(boxes);
  const [boxAIndex, boxBIndex] = makeConnections(Infinity, circuits, distances)!;
  return boxes[boxAIndex][0] * boxes[boxBIndex][0];
};
