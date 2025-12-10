import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split("\n").map((batteries) => batteries.split("").map(Number));

describe("Advent of Code - Day Three", () => {
  describe("Part One", () => {
    it("should get 357", async () => {
      assertEquals(part1(parseInput(await getInput("day3", "input-example"))), 357);
    });
    it("should get 17144", async () => {
      assertEquals(part1(parseInput(await getInput("day3"))), 17144);
    });
  });

  describe("Part Two", () => {
    it("should get 3121910778619", async () => {
      assertEquals(part2(parseInput(await getInput("day3", "input-example"))), 3121910778619);
    });
    it("should get 170371185255900", async () => {
      assertEquals(part2(parseInput(await getInput("day3"))), 170371185255900);
    });
  });
});
