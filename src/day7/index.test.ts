import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getGrid, getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Seven", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 21", async () => {
      assertEquals(part1(getGrid<string>(await getInput("day7", "input-example"))), 21);
    });
    Rhum.testCase("should get 1651", async () => {
      assertEquals(part1(getGrid<string>(await getInput("day7", "input"))), 1651);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 40", async () => {
      assertEquals(part2(getGrid<string>(await getInput("day7", "input-example"))), 40);
    });
    Rhum.testCase("should get 108924003331749", async () => {
      assertEquals(part2(getGrid<string>(await getInput("day7", "input"))), 108924003331749);
    });
  });
});

Rhum.run();
