import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("Advent of Code - Day Six", () => {
  describe("Part One", () => {
    it("should get 4277556", async () => {
      assertEquals(part1((await getInput("day6", "input-example")).split("\n")), 4277556);
    });
    it("should get 8108520669952", async () => {
      assertEquals(part1((await getInput("day6", "input")).split("\n")), 8108520669952);
    });
  });

  describe("Part Two", () => {
    it("should get 3263827", async () => {
      assertEquals(part2((await getInput("day6", "input-example")).split("\n")), 3263827);
    });
    it("should get 11708563470209", async () => {
      assertEquals(part2((await getInput("day6", "input")).split("\n")), 11708563470209);
    });
  });
});
