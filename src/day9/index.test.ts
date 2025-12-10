import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;
const parseInput = (input: string) => input.split("\n").map((box) => box.split(",").map(Number));

Rhum.testPlan("Advent of Code - Day Nine", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 50", async () => {
      assertEquals(part1(parseInput(await getInput("day9", "input-example"))), 50);
    });
    Rhum.testCase("should get 4765757080", async () => {
      assertEquals(part1(parseInput(await getInput("day9", "input"))), 4765757080);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 24", async () => {
      assertEquals(part2(parseInput(await getInput("day9", "input-example"))), 24);
    });
    Rhum.testCase("should get 1498673376", async () => {
      assertEquals(part2(parseInput(await getInput("day9", "input"))), 1498673376);
    });
  });
});

Rhum.run();
