type Device = { device: string; outputs: string[] };
const findPaths = (devices: Device[], device: string, visited: Map<string, number>, includes: string[]): number => {
  const key = `${device}-${includes.join("-")}`;

  if (visited.has(key)) return visited.get(key) ?? 0;
  if (device === "out" && includes.length === 0) return 1;

  const newIncludes = [...includes];
  const seen = includes.findIndex((d) => d === device);

  if (seen > -1) newIncludes.splice(seen, 1);

  const { outputs = [] } = devices.find((d) => d.device === device) ?? {};
  const paths = outputs.reduce((sum, output) => sum + findPaths(devices, output, visited, newIncludes), 0);

  visited.set(key, paths);
  return paths;
};

export const part1 = (devices: Device[]): number => findPaths(devices, "you", new Map(), []);
export const part2 = (devices: Device[]): number => findPaths(devices, "svr", new Map(), ["dac", "fft"]);
