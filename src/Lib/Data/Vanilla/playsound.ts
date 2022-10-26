import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The playsound command */
export const playsound: CommandInfo[] = [
  {
    name: "playsound",
    documentation: "Plays a specified sound at a player, in a location, and in a specific volume and pitch.",
    parameters: [
      { text: "playsound", type: ParameterType.keyword, required: true },
      { text: "sound", type: ParameterType.sound, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
      { text: "volume", type: ParameterType.float, required: false },
      { text: "pitch", type: ParameterType.float, required: false },
      { text: "minimumVolume", type: ParameterType.float, required: false },
    ]
  },
];