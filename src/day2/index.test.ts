import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split(",").map((range) => range.split("-").map(Number));

describe("Advent of Code - Day Two", () => {
  describe("Part One", () => {
    it("should get 1227775554", async () => {
      assertEquals(part1(parseInput(await getInput("day2", "input-example"))), 1227775554);
    });
    it("should get 12850231731", async () => {
      assertEquals(part1(parseInput(await getInput("day2"))), 12850231731);
    });
  });

  describe("Part Two", () => {
    it("should get 4174379265", async () => {
      assertEquals(part2(parseInput(await getInput("day2", "input-example"))), 4174379265);
    });
    it("should get 24774350322", async () => {
      assertEquals(part2(parseInput(await getInput("day2"))), 24774350322);
    });
  });
});
