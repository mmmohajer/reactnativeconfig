import { sizes, percentages } from "../base/vars";

// -----------------------------------------------------------

let widthsInSize = {};

sizes.forEach((s) => {
  widthsInSize[`w${s}`] = { width: s };
});

export { widthsInSize };

// -----------------------------------------------------------

let heightInSize = {};

sizes.forEach((s) => {
  heightInSize[`h${s}`] = { height: s };
});

export { heightInSize };

// -----------------------------------------------------------

let widthsInPercentages = {};

percentages.forEach((p) => {
  widthsInPercentages[`wPer${p}`] = { width: `${p}%` };
});

export { widthsInPercentages };

// -----------------------------------------------------------

let heightInPercentages = {};

percentages.forEach((p) => {
  heightInPercentages[`hPer${p}`] = { height: `${p}%` };
});

export { heightInPercentages };
