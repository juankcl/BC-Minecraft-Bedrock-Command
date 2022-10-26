import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The clearspawnpoint command */
export const clearspawnpoint: CommandInfo[] = [
  {
    name: "clearspawnpoint",
    documentation: "Specifies the player whose spawn point should be removed. If not specified, defaults to the command's executor (@s). Must be a player name or a target selector. And the target selector should be of player type.",
    parameters: [
      {
        text: "clearspawnpoint",
        type: ParameterType.keyword,
        required: true,
      },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
];
