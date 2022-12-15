import { zIndexValues } from "../base/vars";

// -----------------------------------------------------------

let zIndexObj = {};

zIndexValues.forEach((i) => {
  zIndexObj[`zIndex_${i}`] = { zIndex: i };
});

export { zIndexObj };
