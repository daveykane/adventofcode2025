import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split("\n\n").map((line) => line.split("\n"));

describe("Advent of Code - Day Five", () => {
  describe("Part One", () => {
    it("should get 3", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input-example"))), 3);
    });
    it("should get 739", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input"))), 739);
    });
  });

  describe("Part Two", () => {
    it("should get 14", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input-example"))), 14);
    });
    it("should get 344486348901788", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input"))), 344486348901788);
    });
  });
});
