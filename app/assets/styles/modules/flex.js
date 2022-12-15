import {
  flexValues,
  justifyContents,
  alignItems,
  flexWraps,
  flexDirections,
} from "../base/vars";

// -----------------------------------------------------------

let flexObj = {};

let count = 0;
flexValues.forEach((v) => {
  flexObj[`flex_${v}`] = { flex: v };
  flexObj[`flex_gr_${v}`] = { flexGrow: v };
  flexObj[`flex_sh_${v}`] = { flexShrink: v };
  count += 1;
});

export { flexObj };

// -----------------------------------------------------------

let jcObj = {};

Object.keys(justifyContents).forEach((k) => {
  jcObj[`jc_${k}`] = { justifyContent: justifyContents[k] };
});

export { jcObj };

// -----------------------------------------------------------

let aiObj = {};

Object.keys(alignItems).forEach((k) => {
  aiObj[`align_item_${k}`] = { alignItems: alignItems[k] };
  aiObj[`align_self_${k}`] = { alignSelf: alignItems[k] };
});

export { aiObj };

// -----------------------------------------------------------

let wrapObj = {};

Object.keys(flexWraps).forEach((k) => {
  wrapObj[`flex_wrap_${k}`] = { flexWrap: flexWraps[k] };
});

export { wrapObj };

// -----------------------------------------------------------

let dirObj = {};

Object.keys(flexDirections).forEach((k) => {
  dirObj[`flex_dir_${k}`] = { flexDirection: flexDirections[k] };
});

export { dirObj };
