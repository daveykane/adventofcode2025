import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) =>
  input.split("\n").map((machine) => {
    const manual = machine.split(" ");
    const diagram = manual[0].slice(1, -1).split("");
    const joltages = manual[manual.length - 1].slice(1, -1).split(",").map(Number);

    return {
      diagram,
      joltages,
      buttons: manual.slice(1, -1).map((button) => button.slice(1, -1).split(",").map(Number)),
      presses: Infinity,
      lights: Array(diagram.length).fill("."),
      counters: Array(joltages.length).fill(0),
    };
  });

describe("Advent of Code - Day Ten", () => {
  describe("Part One", () => {
    it("should get 7", async () => {
      assertEquals(part1(parseInput(await getInput("day10", "input-example"))), 7);
    });
    it("should get 484", async () => {
      assertEquals(part1(parseInput(await getInput("day10", "input"))), 484);
    });
  });

  describe("Part Two", () => {
    it("should get 33", async () => {
      assertEquals(await part2(parseInput(await getInput("day10", "input-example"))), 33);
    });
    it("should get 19210", async () => {
      assertEquals(await part2(parseInput(await getInput("day10", "input"))), 19210);
    });
  });
});
