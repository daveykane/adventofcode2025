import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split("\n").map((box) => box.split(",").map(Number));

describe("Advent of Code - Day Eight", () => {
  describe("Part One", () => {
    it("should get 40", async () => {
      assertEquals(part1(parseInput(await getInput("day8", "input-example")), 10), 40);
    });
    it("should get 29406", async () => {
      assertEquals(part1(parseInput(await getInput("day8", "input")), 1000), 29406);
    });
  });

  describe("Part Two", () => {
    it("should get 25272", async () => {
      assertEquals(part2(parseInput(await getInput("day8", "input-example"))), 25272);
    });
    it("should get 7499461416", async () => {
      assertEquals(part2(parseInput(await getInput("day8", "input"))), 7499461416);
    });
  });
});
