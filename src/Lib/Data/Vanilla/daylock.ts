import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The daylock command */
export const daylock: CommandInfo[] = [
  {
    name: "daylock",
    documentation: "Specifies whether the eternal daytime is locked or not. If not specified, defaults to true. ",
    parameters: [
      { text: "daylock", type: ParameterType.keyword, required: true },
      { text: "lock", type: ParameterType.boolean, required: false },
    ],
  },
];
