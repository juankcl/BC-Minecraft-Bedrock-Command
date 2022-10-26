import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The function command */
export const Function: CommandInfo[] = [
  {
    name: "function",
    documentation: " Runs a function from a behavior pack.",
    parameters: [
      { text: "function", type: ParameterType.keyword, required: true },
      { text: "function path", type: ParameterType.function, required: true },
    ],
  },
];