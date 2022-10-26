import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The dialogue command */
export const dialogue: CommandInfo[] = [
  {
    name: "dialogue",
    documentation: "Forces open the targeted NPC's dialogue box to the targeted player(s), simulating the experience of clicking on an NPC",
    parameters: [
      { text: "dialogue", type: ParameterType.keyword, required: true },
      { text: "open", type: ParameterType.keyword, required: true },
      {
        text: "npc",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: false, playerOnly: false },
      },
      {
        text: "player receiver",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true, allowFakePlayers: false },
      },
      { text: "scene name", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "dialogue",
    documentation: "Direct an NPC to use the dialogue provided in a specifically designated scene file",
    parameters: [
      { text: "dialogue", type: ParameterType.keyword, required: true },
      { text: "change", type: ParameterType.keyword, required: true },
      {
        text: "npc",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: false, playerOnly: false },
      },
      { text: "scene name", type: ParameterType.string, required: true },
      {
        text: "player receiver",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true, allowFakePlayers: false },
      },
    ],
  },
];
