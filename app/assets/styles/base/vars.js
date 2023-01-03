export const colors = {
  yellow: "yellow",
  red: "red",
  blue: "blue",
  black: "black",
  white: "white",
  pink: "pink",
  purple: "purple",
  silver: "silver",
  orange: "orange",
  green: "green",
  gray: "gray",
  themeOne: "orange",
  themeTwo: "yellow",
  themeThree: "red",
  themeFour: "blue",
  success: "green",
  warning: "orange",
  danger: "red",
  error: "red",
  info: "blue",
};

// ---------------------------------------

const sizes = [];
for (let i = 0; i <= 1000; i += 5) {
  sizes.push(i);
}
export { sizes };

// ---------------------------------------

const percentages = [];
for (let i = 0; i <= 100; i += 5) {
  percentages.push(i);
}
export { percentages };

// ---------------------------------------

const borderRadiusInSize = [];
for (let i = 0; i <= 500; i += 5) {
  borderRadiusInSize.push(i);
}
export { borderRadiusInSize };

// ---------------------------------------

const borderRadiusInPercentage = [];
for (let i = 0; i <= 500; i += 5) {
  borderRadiusInPercentage.push(i);
}
export { borderRadiusInPercentage };

// ---------------------------------------

const borderWidth = [];
for (let i = 0; i <= 50; i += 1) {
  borderWidth.push(i);
}
export { borderWidth };

// ---------------------------------------

// IOS Shaodws
const shadows = [];
shadows["Type1"] = {
  shadowColor: "gray",
  shadowOffset: { width: 10, height: 10 },
  shadowOpacity: 1,
  shadowRadius: 10,
};
export { shadows };

// Android Shadows
const elevations = [];
for (let i = 0; i <= 50; i += 5) {
  elevations.push(i);
}
export { elevations };

// ---------------------------------------
const spaces = [];
for (let i = 0; i <= 500; i += 8) {
  spaces.push(i);
}
export { spaces };

// ---------------------------------------
const flexValues = [];
for (let i = 0; i <= 100; i += 5) {
  flexValues.push(i / 100);
}
for (let i = 0; i <= 10; i += 0.5) {
  flexValues.push(i);
}
export { flexValues };

export const justifyContents = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  distributedBetween: "space-between",
  distributedEvenly: "space-evenly",
  distributedAround: "space-around",
};

export const alignItems = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  baseline: "baseline",
};

export const flexWraps = {
  no: "nowrap",
  yes: "wrap",
  reverse: "wrap-reverse",
};

export const flexDirections = {
  col: "column",
  row: "row",
  col_reverse: "column-reverse",
  row_reverse: "row-reverse",
};

// ---------------------------------------
const zIndexValues = [];
for (let i = 0; i <= 20; i += 1) {
  zIndexValues.push(i);
}
for (let i = 2; i <= 10; i += 1) {
  let curVal = Math.pow(10, i);
  zIndexValues.push(curVal);
}
export { zIndexValues };

// ---------------------------------------
const opacityValues = [];
for (let i = 0; i <= 100; i += 5) {
  opacityValues.push(i / 100);
}
export { opacityValues };
