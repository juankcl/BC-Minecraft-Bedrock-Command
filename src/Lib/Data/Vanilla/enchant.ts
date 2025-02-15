import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The enchant command */
export const enchant: CommandInfo[] = [
  {
    name: "enchant",
    documentation: "Adds an enchantment to a player's selected item, subject to the same restrictions as an anvil. Also works on any mob or entity holding a weapon/tool /armor in their main hand.",
    parameters: [
      { text: "enchant", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "id", type: ParameterType.integer, required: true },
      { text: "level", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "enchant",
    documentation: "Enchants a player item.",
    parameters: [
      { text: "enchant", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "id", type: ParameterType.string, required: true },
      { text: "level", type: ParameterType.keyword, required: false },
    ],
  },
];
