import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The fill command */
export const fill: CommandInfo[] = [
  {
    name: "fill",
    documentation: "Fills a region with a specific block.",
    parameters: [
      { text: "fill", type: ParameterType.keyword, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      { text: "tile data", type: ParameterType.integer, required: true },
      { text: "replace", type: ParameterType.keyword, required: true },
      {
        text: "replace tile name",
        type: ParameterType.block,
        required: false,
      },
      {
        text: "replace data value",
        type: ParameterType.integer,
        required: false,
      },
    ],
  },
  {
    name: "fill",
    documentation: "Fills a region with a specific block.",
    parameters: [
      { text: "fill", type: ParameterType.keyword, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      { text: "tile data", type: ParameterType.integer, required: true },
      { text: "replace", type: ParameterType.keyword, required: true },
      {
        text: "replace tile name",
        type: ParameterType.block,
        required: false,
      },
      {
        text: "replace block states",
        type: ParameterType.blockStates,
        required: false,
      },
    ],
  },
  {
    name: "fill",
    documentation: "Fills a region with a specific block.",
    parameters: [
      { text: "fill", type: ParameterType.keyword, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      {
        text: "block states",
        type: ParameterType.blockStates,
        required: true,
      },
      { text: "replace", type: ParameterType.keyword, required: true },
      {
        text: "replace tile name",
        type: ParameterType.block,
        required: false,
      },
      {
        text: "replace block states",
        type: ParameterType.blockStates,
        required: false,
      },
    ],
  },
  {
    name: "fill",
    documentation: "Fills a region with a specific block.",
    parameters: [
      { text: "fill", type: ParameterType.keyword, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      { text: "tile data", type: ParameterType.integer, required: false },
      { text: "mode", type: ParameterType.fillMode, required: true },
    ],
  },
];