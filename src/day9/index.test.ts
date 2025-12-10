import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split("\n").map((box) => box.split(",").map(Number));

describe("Advent of Code - Day Nine", () => {
  describe("Part One", () => {
    it("should get 50", async () => {
      assertEquals(part1(parseInput(await getInput("day9", "input-example"))), 50);
    });
    it("should get 4765757080", async () => {
      assertEquals(part1(parseInput(await getInput("day9", "input"))), 4765757080);
    });
  });

  describe("Part Two", () => {
    it("should get 24", async () => {
      assertEquals(part2(parseInput(await getInput("day9", "input-example"))), 24);
    });
    it("should get 1498673376", async () => {
      assertEquals(part2(parseInput(await getInput("day9", "input"))), 1498673376);
    });
  });
});
