import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;
const parseInput = (input: string) => input.split("\n").map((box) => box.split(",").map(Number));

Rhum.testPlan("Advent of Code - Day Eight", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 40", async () => {
      assertEquals(part1(parseInput(await getInput("day8", "input-example")), 10), 40);
    });
    Rhum.testCase("should get 29406", async () => {
      assertEquals(part1(parseInput(await getInput("day8", "input")), 1000), 29406);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 25272", async () => {
      assertEquals(part2(parseInput(await getInput("day8", "input-example"))), 25272);
    });
    Rhum.testCase("should get 7499461416", async () => {
      assertEquals(part2(parseInput(await getInput("day8", "input"))), 7499461416);
    });
  });
});

Rhum.run();
