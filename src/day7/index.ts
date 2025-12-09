import { sum } from "../utils/index.ts";

const trackBeams = (diagram: string[][]) => {
  let splits = 0;
  const beams: number[] = diagram[0].map((cell) => (cell === "S" ? 1 : 0));

  for (let y = 2; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      if (diagram[y][x] === "^" && beams[x] >= 1) {
        beams[x - 1] += beams[x];
        beams[x + 1] += beams[x];
        beams[x] = 0;
        splits += 1;
      }
    }
  }

  return { beams, splits };
};

export const part1 = (diagram: string[][]): number => trackBeams(diagram).splits;
export const part2 = (diagram: string[][]): number => sum(trackBeams(diagram).beams);
