import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Six", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 4277556", async () => {
      assertEquals(part1((await getInput("day6", "input-example")).split("\n")), 4277556);
    });
    Rhum.testCase("should get 8108520669952", async () => {
      assertEquals(part1((await getInput("day6", "input")).split("\n")), 8108520669952);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 3263827", async () => {
      assertEquals(part2((await getInput("day6", "input-example")).split("\n")), 3263827);
    });
    Rhum.testCase("should get 11708563470209", async () => {
      assertEquals(part2((await getInput("day6", "input")).split("\n")), 11708563470209);
    });
  });
});

Rhum.run();
