import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The me command */
export const me: CommandInfo[] = [
  {
    name: "me",
    documentation: "Displays a message about yourself(sender).",
    parameters: [
      { text: "me", type: ParameterType.keyword, required: true },
      { text: "message", type: ParameterType.message, required: true },
    ],
  },
];