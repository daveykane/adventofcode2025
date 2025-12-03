const sumValidIDs = (ranges: number[][], pattern: RegExp) =>
  ranges.reduce((sum, range) => {
    for (let i = range[0]; i <= range[1]; i++) {
      if (pattern.test(`${i}`)) sum = sum + i;
    }

    return sum;
  }, 0);

export const part1 = (ranges: number[][]) => sumValidIDs(ranges, /^(\d+)\1$/);
export const part2 = (ranges: number[][]) => sumValidIDs(ranges, /^(\d+)\1+$/);
