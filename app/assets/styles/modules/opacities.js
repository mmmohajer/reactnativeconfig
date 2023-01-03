import { opacityValues } from "../base/vars";

// -----------------------------------------------------------

let opacityObj = {};

opacityValues.forEach((i) => {
  opacityObj[`opacity_${i}`] = { opacity: i };
});

export { opacityObj };
