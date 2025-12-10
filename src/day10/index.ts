import { sum } from "../utils/index.ts";
import { init, Arith, Bool } from "dtk-z3-solver-deno-v2";

type Machine = {
  diagram: string[];
  buttons: number[][];
  joltages: number[];
  presses: number;
  lights: string[];
  counters: number[];
};

export const part1 = (machines: Machine[]): number => {
  machines.forEach((machine) => {
    const queue = [{ lights: machine.lights, presses: 0 }];
    const visited = new Set([machine.lights.join("")]);

    while (queue.length) {
      const { lights, presses } = queue.shift()!;

      if (lights.join("") === machine.diagram.join("")) {
        machine.presses = presses;
        machine.lights = lights;
        break;
      }

      machine.buttons.forEach((button) => {
        const newLights = lights.map((light, i) => (button.includes(i) ? (light === "#" ? "." : "#") : light));
        const key = newLights.join("");

        if (!visited.has(key)) {
          visited.add(key);
          queue.push({ lights: newLights, presses: presses + 1 });
        }
      });
    }
  });

  return sum(machines.map((machine) => machine.presses));
};

export const part2 = async (machines: Machine[]): Promise<number> => {
  const { Context } = await init();

  await Promise.all(
    machines.map(async (machine) => {
      const { Optimize, Int } = Context("main");

      const vars: Arith<"main">[] = [];
      const solver = new Optimize();

      for (let ind = 0; ind < machine.buttons.length; ind++) {
        const v = Int.const(`${ind}`);
        solver.add(v.ge(0));
        vars.push(v);
      }

      for (let x = 0; x < machine.joltages.length; x++) {
        let condition: Arith<"main"> | Bool<"main"> = Int.val(0);

        machine.buttons.forEach((button, index) => {
          if (button.includes(x)) {
            condition = (condition as Arith<"main">).add(vars[index]);
          }
        });

        condition = condition.eq(Int.val(machine.joltages[x]));
        solver.add(condition);
      }

      const sumVars = vars.reduce((a, v) => a.add(v), Int.val(0));

      solver.minimize(sumVars);

      if ((await solver.check()) === "sat") {
        machine.presses = parseInt(solver.model().eval(sumVars).toString(), 10);
      }
    })
  );

  return sum(machines.map((machine) => machine.presses));
};
