import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day One", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 3", async () => {
      assertEquals(part1((await getInput("day1", "input-example")).split("\n")), 3);
    });
    Rhum.testCase("should get 992", async () => {
      assertEquals(part1((await getInput("day1")).split("\n")), 992);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 6", async () => {
      assertEquals(part2((await getInput("day1", "input-example")).split("\n")), 6);
    });
    Rhum.testCase("should get 6133", async () => {
      assertEquals(part2((await getInput("day1")).split("\n")), 6133);
    });
  });
});

Rhum.run();
