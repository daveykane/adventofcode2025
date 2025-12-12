export const part1 = (input: string[]): number => {
  const regions = input
    .splice(input.length - 1)[0]
    .split("\n")
    .map((region) => {
      const [area, counts] = region.split(": ");
      return {
        area: area.split("x").map(Number),
        counts: counts.split(" ").map(Number),
      };
    });

  const shapes = input.map((shape) => {
    const [index, ...grid] = shape.split("\n");
    const presents = grid.reduce((sum, row) => sum + row.split("").filter((cell) => cell === "#").length, 0);
    return { index: Number(index.replace(":", "")), grid, presents };
  });

  return regions.reduce((total, region) => {
    const totalArea = region.area[0] * region.area[1];
    const needArea = region.counts.reduce(
      (sum, count, index) => (count > 0 ? sum + count * shapes[index].presents : sum),
      0
    );

    return needArea <= totalArea ? total + 1 : total;
  }, 0);
};
