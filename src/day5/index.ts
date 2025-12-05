export const part1 = ([fresh, available]: string[][]) => {
  const freshRanges = fresh.map((range) => range.split("-").map(Number));

  return available.reduce((total, ingredient) => {
    const isFresh = freshRanges.some(([min, max]) => {
      const value = Number(ingredient);
      return value >= min && value <= max;
    });

    return total + (isFresh ? 1 : 0);
  }, 0);
};

export const part2 = ([fresh]: string[][]) => {
  const ranges = fresh.map((range) => range.split("-").map(Number));

  for (let i = 0; i < ranges.length; i++) {
    for (let j = i + 1; j < ranges.length; j++) {
      const [minA, maxA] = ranges[i];
      const [minB, maxB] = ranges[j];

      if (minA <= maxB && minB <= maxA) {
        ranges[j][0] = Math.min(minA, minB);
        ranges[j][1] = Math.max(maxA, maxB);
        ranges[i] = [0, -1];
      }
    }
  }

  return ranges.reduce((total, [min, max]) => total + (max - min + 1), 0);
};
