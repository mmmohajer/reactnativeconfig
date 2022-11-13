import { shadows, elevations } from "../base/vars";

// -----------------------------------------------------------

let shadowObject = {};

Object.keys(shadows).forEach((k) => {
  shadowObject[`sh${k}`] = shadows[k];
});

export { shadowObject };

// -----------------------------------------------------------

let elevationObj = {};

elevations.forEach((e) => {
  elevationObj[`sh${e}`] = { elevation: e };
});

export { elevationObj };
