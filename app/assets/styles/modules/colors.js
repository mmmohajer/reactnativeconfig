import { colors } from "../base/vars";

// -----------------------------------------------------------

let textColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  textColors[`text${className}`] = { color: colors[c] };
});

export { textColors };

// ----------------------------------------------------------

let bgColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  bgColors[`bg${className}`] = { backgroundColor: colors[c] };
});

export { bgColors };
