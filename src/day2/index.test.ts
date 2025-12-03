import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;
const parseInput = (input: string) => input.split(",").map((range) => range.split("-").map(Number));

Rhum.testPlan("Advent of Code - Day Two", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 1227775554", async () => {
      assertEquals(part1(parseInput(await getInput("day2", "input-example"))), 1227775554);
    });
    Rhum.testCase("should get 12850231731", async () => {
      assertEquals(part1(parseInput(await getInput("day2"))), 12850231731);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 4174379265", async () => {
      assertEquals(part2(parseInput(await getInput("day2", "input-example"))), 4174379265);
    });
    Rhum.testCase("should get 24774350322", async () => {
      assertEquals(part2(parseInput(await getInput("day2"))), 24774350322);
    });
  });
});

Rhum.run();
