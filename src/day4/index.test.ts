import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
describe("Advent of Code - Day Four", () => {
  describe("Part One", () => {
    it("should get 13", async () => {
      assertEquals(part1(await getInput("day4", "input-example")), 13);
    });
    it("should get 1397", async () => {
      assertEquals(part1(await getInput("day4")), 1397);
    });
  });

  describe("Part Two", () => {
    it("should get 43", async () => {
      assertEquals(part2(await getInput("day4", "input-example")), 43);
    });
    it("should get 8758", async () => {
      assertEquals(part2(await getInput("day4")), 8758);
    });
  });
});
