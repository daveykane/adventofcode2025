const getNextBattery = (bank: number[], startIndex: number, remainingSlots: number) => {
  const usableBatteries = bank.slice(startIndex, bank.length - remainingSlots);
  const nextBattery = Math.max(...usableBatteries);
  const nextBatteryIndex = usableBatteries.indexOf(nextBattery);
  return { voltage: `${nextBattery}`, index: startIndex + nextBatteryIndex };
};

const getVoltage = (bank: number[], numBatteries: number) => {
  let voltage = "";
  let startingIndex = 0;

  for (let i = 0; i < numBatteries; i++) {
    const nextBattery = getNextBattery(bank, startingIndex, numBatteries - 1 - i);
    voltage += nextBattery.voltage;
    startingIndex = nextBattery.index + 1;
  }

  return parseInt(voltage, 10);
};

export const part1 = (banks: number[][]) => banks.reduce((sum, bank) => sum + getVoltage(bank, 2), 0);
export const part2 = (banks: number[][]) => banks.reduce((sum, bank) => sum + getVoltage(bank, 12), 0);
