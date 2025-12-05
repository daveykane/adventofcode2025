import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;
const parseInput = (input: string) => input.split("\n\n").map((line) => line.split("\n"));

Rhum.testPlan("Advent of Code - Day Five", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 3", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input-example"))), 3);
    });
    Rhum.testCase("should get 739", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input"))), 739);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 14", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input-example"))), 14);
    });
    Rhum.testCase("should get 344486348901788", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input"))), 344486348901788);
    });
  });
});

Rhum.run();
