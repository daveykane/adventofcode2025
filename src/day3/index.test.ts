import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;
const parseInput = (input: string) => input.split("\n").map((batteries) => batteries.split("").map(Number));

Rhum.testPlan("Advent of Code - Day Three", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 357", async () => {
      assertEquals(part1(parseInput(await getInput("day3", "input-example"))), 357);
    });
    Rhum.testCase("should get 17144", async () => {
      assertEquals(part1(parseInput(await getInput("day3"))), 17144);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 3121910778619", async () => {
      assertEquals(part2(parseInput(await getInput("day3", "input-example"))), 3121910778619);
    });
    Rhum.testCase("should get 170371185255900", async () => {
      assertEquals(part2(parseInput(await getInput("day3"))), 170371185255900);
    });
  });
});

Rhum.run();
