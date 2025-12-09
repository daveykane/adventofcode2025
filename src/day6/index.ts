const sum = (a: number, b: number, multiply = false) => (multiply ? a * b : a + b);
const reduce = (arr: number[], multiply = false) => arr.reduce((a, b) => sum(a, b, multiply), multiply ? 1 : 0);

const completeWorksheet = (lines: string[]) => {
  const part1Totals: number[] = [];
  const part2Totals: number[] = [];
  const operations = lines[lines.length - 1].split(/\s+/);
  const sheet = lines.slice(0, -1).map((line) => line.split(""));

  let column = 1;
  const part1Values: string[] = [];

  for (let i = sheet[0].length - 1; i >= 0; i--) {
    const operation = operations[operations.length - column];

    let colVal = "";
    const totalsIndex = column - 1;
    const opStartingValue = operation === "+" ? 0 : 1;
    part2Totals[totalsIndex] = part2Totals[totalsIndex] ?? opStartingValue;

    for (let j = 0; j < sheet.length; j++) {
      colVal += sheet[j][i];
      part1Values[j] = !part1Values[j] ? sheet[j][i] : sheet[j][i] + part1Values[j];
    }

    const value = parseInt(colVal, 10);

    if (isNaN(value) && i !== 0) {
      column += 1;
      continue;
    }

    part2Totals[totalsIndex] = sum(part2Totals[totalsIndex], value, operation !== "+");
    part1Totals[totalsIndex] = part1Values.reduce(
      (total, val) => sum(total, parseInt(val, 10), operation !== "+"),
      opStartingValue
    );
  }

  return { part2Totals, part1Totals };
};

export const part1 = (lines: string[]) => reduce(completeWorksheet(lines).part1Totals);
export const part2 = (lines: string[]) => reduce(completeWorksheet(lines).part2Totals);
