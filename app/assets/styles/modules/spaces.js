import { spaces } from "../base/vars";

// -----------------------------------------------------------

let spaceObj = {};

let count = 0;
spaces.forEach((s) => {
  spaceObj[`p${count}`] = { padding: s };
  spaceObj[`m${count}`] = { margin: s };
  spaceObj[`pL${count}`] = { paddingLeft: s };
  spaceObj[`mL${count}`] = { marginLeft: s };
  spaceObj[`pT${count}`] = { paddingTop: s };
  spaceObj[`mT${count}`] = { marginTop: s };
  spaceObj[`pR${count}`] = { paddingRight: s };
  spaceObj[`mR${count}`] = { marginRight: s };
  spaceObj[`pB${count}`] = { paddingBottom: s };
  spaceObj[`mB${count}`] = { marginBottom: s };
  count += 1;
});

export { spaceObj };
