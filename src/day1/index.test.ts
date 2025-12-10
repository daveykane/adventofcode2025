import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("Advent of Code - Day One", () => {
  describe("Part One", () => {
    it("should get 3", async () => {
      assertEquals(part1((await getInput("day1", "input-example")).split("\n")), 3);
    });
    it("should get 992", async () => {
      assertEquals(part1((await getInput("day1")).split("\n")), 992);
    });
  });

  describe("Part Two", () => {
    it("should get 6", async () => {
      assertEquals(part2((await getInput("day1", "input-example")).split("\n")), 6);
    });
    it("should get 6133", async () => {
      assertEquals(part2((await getInput("day1")).split("\n")), 6133);
    });
  });
});
