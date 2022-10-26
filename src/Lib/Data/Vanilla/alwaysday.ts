import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The alwaysday command */
export const alwaysday: CommandInfo[] = [
  {
    name: "alwaysday",
    documentation: "Sets /gamerule dodaylightcycle to false, and sets /time to 5000. This is the same as the Always Day slider in the Game Settings. The command can also be given as daylock.",
    parameters: [
      { text: "alwaysday", type: ParameterType.keyword, required: true },
      { text: "lock", type: ParameterType.boolean, required: false },
    ],
  },
];
