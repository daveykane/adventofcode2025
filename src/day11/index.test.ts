import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) =>
  input.split("\n").map((line) => {
    const [device, ...outputs] = line.split(": ");
    return { device, outputs: outputs[0].split(" ") };
  });

describe("Advent of Code - Day Eleven", () => {
  describe("Part One", () => {
    it("should get 5", async () => {
      assertEquals(part1(parseInput(await getInput("day11", "input-example1"))), 5);
    });
    it("should get 477", async () => {
      assertEquals(part1(parseInput(await getInput("day11", "input"))), 477);
    });
  });

  describe("Part Two", () => {
    it("should get 2", async () => {
      assertEquals(part2(parseInput(await getInput("day11", "input-example2"))), 2);
    });
    it("should get 383307150903216", async () => {
      assertEquals(part2(parseInput(await getInput("day11", "input"))), 383307150903216);
    });
  });
});
