import { part1 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

const parseInput = (input: string) => input.split("\n\n");

describe("Advent of Code - Day Twelve", () => {
  describe("Part One", () => {
    it("should get 2", async () => {
      assertEquals(part1(parseInput(await getInput("day12", "input-example"))), 2);
    });
    it("should get 440", async () => {
      assertEquals(part1(parseInput(await getInput("day12", "input"))), 440);
    });
  });
});
