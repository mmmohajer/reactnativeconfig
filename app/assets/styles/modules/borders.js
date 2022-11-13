import {
  borderRadiusInSize,
  borderRadiusInPercentage,
  colors,
  borderWidth,
} from "../base/vars";

// -----------------------------------------------------------

let brRadiusInSize = {};

borderRadiusInSize.forEach((br) => {
  brRadiusInSize[`brRad${br}`] = { borderRadius: br };
  brRadiusInSize[`brRadTL${br}`] = { borderTopLeftRadius: br };
  brRadiusInSize[`brRadTR${br}`] = { borderTopRightRadius: br };
  brRadiusInSize[`brRadBL${br}`] = { borderBottomLeftRadius: br };
  brRadiusInSize[`brRadBR${br}`] = { borderBottomRightRadius: br };
});

export { brRadiusInSize };

// -----------------------------------------------------------

let brRadiusInPer = {};

borderRadiusInPercentage.forEach((br) => {
  brRadiusInPer[`brRadPer${br}`] = { borderRadius: `${br}%` };
  brRadiusInPer[`brRadTLPer${br}`] = { borderTopLeftRadius: `${br}%` };
  brRadiusInPer[`brRadTRPer${br}`] = { borderTopRightRadius: `${br}%` };
  brRadiusInPer[`brRadBLPer${br}`] = { borderBottomLeftRadius: `${br}%` };
  brRadiusInPer[`brRadBRPer${br}`] = { borderBottomRightRadius: `${br}%` };
});

export { brRadiusInPer };

// -----------------------------------------------------------

let brColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  brColors[`brColor${className}`] = { borderColor: colors[c] };
  brColors[`brColorL${className}`] = { borderLeftColor: colors[c] };
  brColors[`brColorT${className}`] = { borderTopColor: colors[c] };
  brColors[`brColorR${className}`] = { borderRightColor: colors[c] };
  brColors[`brColorB${className}`] = { borderBottomColor: colors[c] };
});

export { brColors };

// -----------------------------------------------------------

let brWidths = {};

borderWidth.forEach((brW) => {
  brWidths[`brThickness${brW}`] = { borderWidth: brW };
  brWidths[`brThicknessT${brW}`] = { borderTopWidth: brW };
  brWidths[`brThicknessR${brW}`] = { borderRightWidth: brW };
  brWidths[`brThicknessB${brW}`] = { borderBottomWidth: brW };
  brWidths[`brThicknessL${brW}`] = { borderLeftWidth: brW };
});

export { brWidths };
