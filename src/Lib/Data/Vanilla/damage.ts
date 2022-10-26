import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The damage command */
export const damage: CommandInfo[] = [
  {
    name: "damage",
    documentation: "When damaged, the entity may react accordingly, such as being knocked back, becoming angry, etc. The damager entity may also react in certain ways, such as the arrow's disappearing.",
    parameters: [
      { text: "damage", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true },
      { text: "amount", type: ParameterType.integer, required: true },
      { text: "cause", type: ParameterType.causeType, required: false },
    ],
  },
  {
    name: "damage",
    documentation: "Apply damage to the specified entity.",
    parameters: [
      { text: "damage", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true },
      { text: "amount", type: ParameterType.integer, required: true },
      { text: "cause", type: ParameterType.causeType, required: true },
      { text: "entity", type: ParameterType.keyword, required: true },
      { text: "damager", type: ParameterType.selector, required: true },
    ],
  },
];
