import { part1, part2 } from "./index.ts";
import { getGrid, getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("Advent of Code - Day Seven", () => {
  describe("Part One", () => {
    it("should get 21", async () => {
      assertEquals(part1(getGrid<string>(await getInput("day7", "input-example"))), 21);
    });
    it("should get 1651", async () => {
      assertEquals(part1(getGrid<string>(await getInput("day7", "input"))), 1651);
    });
  });

  describe("Part Two", () => {
    it("should get 40", async () => {
      assertEquals(part2(getGrid<string>(await getInput("day7", "input-example"))), 40);
    });
    it("should get 108924003331749", async () => {
      assertEquals(part2(getGrid<string>(await getInput("day7", "input"))), 108924003331749);
    });
  });
});
