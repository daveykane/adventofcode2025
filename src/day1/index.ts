const getRotations = (instructions: string[]) => {
  return instructions.map((instruction) => {
    const direction = instruction.charAt(0);
    const clicks = instruction.slice(1);
    const loops = clicks.length > 2 ? parseInt(`${clicks}`.slice(0, clicks.length - 2), 10) : 0;
    return { clicks: parseInt(clicks.slice(-2), 10), direction, loops };
  });
};

const countZeros = (rotations: { clicks: number; direction: string; loops: number }[], countLoops: boolean) => {
  let counter = 0;
  let position = 50;

  rotations.forEach(({ direction, clicks, loops }) => {
    const startPosition = position;

    position += direction === "R" ? clicks : -clicks;

    if (countLoops) {
      counter += position === 0 || (startPosition !== 0 && (position < 0 || position > 99)) ? loops + 1 : loops;
    }

    position = position < 0 ? 100 + position : position >= 100 ? position - 100 : position;

    if (position === 0 && !countLoops) counter += 1;
  });

  return counter;
};

export const part1 = (instructions: string[]) => countZeros(getRotations(instructions), false);
export const part2 = (instructions: string[]) => countZeros(getRotations(instructions), true);
