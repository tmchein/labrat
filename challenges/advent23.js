function executeCommands(commands) {
  const cpu = [0, 0, 0, 0, 0, 0, 0, 0];
  const maxBitValue = 255;
  const minBitValue = 0;

  const commandMap = {
    MOV: (arg1, arg2) => {
      if (typeof arg1 === "number") {
        cpu[arg2] = arg1;
      } else {
        cpu[arg2] = cpu[arg1];
      }
    },
    ADD: (arg1, arg2) => {
      if (cpu[arg1] + cpu[arg2] > maxBitValue) {
        cpu[arg1] = maxBitValue - (cpu[arg1] + cpu[arg2]) - 1;
      } else {
        cpu[arg1] = cpu[arg1] + cpu[arg2];
      }
    },
    DEC: (arg1) => {
      if (cpu[arg1] - 1 < minBitValue) {
        cpu[arg1] = 255;
      } else {
        cpu[arg1]--;
      }
    },
    INC: (arg1) => {
      if (cpu[arg1] + 1 > maxBitValue) {
        cpu[arg1] = 0;
      } else {
        cpu[arg1]++;
      }
    },
    JMP: (arg1) => {
      if (cpu[0] !== 0) {
        return arg1;
      }
    },
  };

  for (let i = 0; i < commands.length; i++) {
    const commandType = commands[i].split(" ");
    const commandParam = commandType[1].split(",");
    if (!isNaN(commandParam[0])) commandParam[0] = Number(commandParam[0]);
    if (commandParam[1] && isNaN(commandParam[1]))
      commandParam[1] = commandParam[1].slice(-1);
    if (commandParam[0] && isNaN(commandParam[0]))
      commandParam[0] = commandParam[0].slice(-1);
    const commandResult = commandMap[commandType[0]](
      commandParam[0],
      commandParam[1]
    );
    if (commandResult !== undefined) {
      i = commandResult - 1;
    }
  }

  return cpu;
}

executeCommands([
  "MOV 10,V00", // V00 es 10
  "DEC V00", // decrementa V00 en 1  <---┐
  "INC V01", // incrementa V01 en 1      |
  "JMP 1", // bucle hasta que V00 sea 0 ----┘
  "INC V06", // incrementa V06 en 1
]);

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
