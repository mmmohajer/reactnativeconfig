import { styles, fontStyleFunc } from "Styles";

export const getAllViewStyles = (props) => {
  let appliedStyle = {};
  if (props?.direction === "row") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_row };
  }
  if (props?.direction === "row-reverse") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_row_reverse };
  }
  if (props?.direction === "col-reverse") {
    appliedStyle = { ...appliedStyle, ...styles.flex_dir_col_reverse };
  }
  if (props?.isFullHeight) {
    appliedStyle = { ...appliedStyle, ...styles.flex_1 };
  }
  if (props?.isFullWidth) {
    appliedStyle = { ...appliedStyle, ...styles.wPer100 };
  }
  if (props?.heightInPercentage) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`hPer${props.heightInPercentage}`],
    };
  }
  if (props?.widthInPercentage) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`wPer${props.widthInPercentage}`],
    };
  }
  if (props?.heightInSize) {
    appliedStyle = { ...appliedStyle, ...styles[`h${props.heightInSize}`] };
  }
  if (props?.widthInSize) {
    appliedStyle = { ...appliedStyle, ...styles[`w${props.widthInSize}`] };
  }
  if (props?.brThickness) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThickness${props.brThickness}`],
    };
  }
  if (props?.brThicknessL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessL${props.brThicknessL}`],
    };
  }
  if (props?.brThicknessT) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessT${props.brThicknessT}`],
    };
  }
  if (props?.brThicknessB) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessB${props.brThicknessB}`],
    };
  }
  if (props?.brThicknessR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brThicknessR${props.brThicknessR}`],
    };
  }
  if (props?.brColor) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[
        `brColor${props.brColor[0].toUpperCase() + props.brColor.slice(1)}`
      ],
    };
  }
  if (props?.brColorL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[
        `brColorL${props.brColorL[0].toUpperCase() + props.brColorL.slice(1)}`
      ],
    };
  }
  if (props?.brColorT) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[
        `brColorT${props.brColorT[0].toUpperCase() + props.brColorT.slice(1)}`
      ],
    };
  }
  if (props?.brColorB) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[
        `brColorB${props.brColorB[0].toUpperCase() + props.brColorB.slice(1)}`
      ],
    };
  }
  if (props?.brColorR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[
        `brColorR${props.brColorR[0].toUpperCase() + props.brColorR.slice(1)}`
      ],
    };
  }
  if (props?.brRad) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRad${props.brRad}`],
    };
  }
  if (props?.brRadTL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTL${props.brRadTL}`],
    };
  }
  if (props?.brRadTR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTR${props.brRadTR}`],
    };
  }
  if (props?.brRadBL) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBL${props.brRadBL}`],
    };
  }
  if (props?.brRadBR) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBR${props.brRadBR}`],
    };
  }
  if (props?.brRadPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadPer${props.brRadPer}`],
    };
  }
  if (props?.brRadTLPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTLPer${props.brRadTLPer}`],
    };
  }
  if (props?.brRadTRPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadTRPer${props.brRadTRPer}`],
    };
  }
  if (props?.brRadBLPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBLPer${props.brRadBLPer}`],
    };
  }
  if (props?.brRadBRPer) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`brRadBRPer${props.brRadBRPer}`],
    };
  }
  if (props?.padding) {
    appliedStyle = { ...appliedStyle, ...styles[`p${props.padding}`] };
  }
  if (props?.paddingL) {
    appliedStyle = { ...appliedStyle, ...styles[`pL${props.paddingL}`] };
  }
  if (props?.paddingT) {
    appliedStyle = { ...appliedStyle, ...styles[`pT${props.paddingT}`] };
  }
  if (props?.paddingB) {
    appliedStyle = { ...appliedStyle, ...styles[`pB${props.paddingB}`] };
  }
  if (props?.paddingR) {
    appliedStyle = { ...appliedStyle, ...styles[`pR${props.paddingR}`] };
  }
  if (props?.margin) {
    appliedStyle = { ...appliedStyle, ...styles[`m${props.margin}`] };
  }
  if (props?.marginL) {
    appliedStyle = { ...appliedStyle, ...styles[`mL${props.marginL}`] };
  }
  if (props?.marginT) {
    appliedStyle = { ...appliedStyle, ...styles[`mT${props.marginT}`] };
  }
  if (props?.marginB) {
    appliedStyle = { ...appliedStyle, ...styles[`mB${props.marginB}`] };
  }
  if (props?.marginR) {
    appliedStyle = { ...appliedStyle, ...styles[`mR${props.marginR}`] };
  }
  if (props?.isCentralizedInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_center };
  }
  if (props?.isCentralizedInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_center };
  }
  if (props?.isDistributedBetweenInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_distributedBetween };
  }
  if (props?.isDistributedBetweenInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_distributedBetween };
  }
  if (props?.isDistributedAroundInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_distributedAround };
  }
  if (props?.isDistributedAroundInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_distributedAround };
  }

  if (props?.isReversedInX1Dir) {
    appliedStyle = { ...appliedStyle, ...styles.jc_end };
  }
  if (props?.isReversedInX2Dir) {
    appliedStyle = { ...appliedStyle, ...styles.align_item_end };
  }
  if (props?.bgColor) {
    appliedStyle = {
      ...appliedStyle,
      ...styles[`bg${props.bgColor[0].toUpperCase() + props.bgColor.slice(1)}`],
    };
  }
  if (props?.style) {
    appliedStyle = {
      ...appliedStyle,
      ...props.style,
    };
  }
  if (props?.flex_wrap) {
    appliedStyle = {
      ...appliedStyle,
      ...styles.flex_wrap_yes,
    };
  }
  if (props?.flex_wrap_reverse) {
    appliedStyle = {
      ...appliedStyle,
      ...styles.flex_wrap_reverse,
    };
  }
  if (props?.zIndex) {
    appliedStyle = { ...appliedStyle, ...styles[`zIndex_${props.zIndex}`] };
  }
  return appliedStyle;
};

export const getAllTextStyles = (props) => {
  let appliedStyle = {};

  if (props?.isBold) {
    appliedStyle = { ...appliedStyle, isBold: props.isBold };
  }
  if (props?.color) {
    appliedStyle = { ...appliedStyle, color: props.color };
  }
  if (props?.isCenterAlign) {
    appliedStyle = { ...appliedStyle, isCenterAlign: props.isCenterAlign };
  }
  if (props?.isItalic) {
    appliedStyle = { ...appliedStyle, isItalic: props.isItalic };
  }
  if (props?.isCapitalize) {
    appliedStyle = { ...appliedStyle, isCapitalize: props.isCapitalize };
  }
  if (props?.lineHeight) {
    appliedStyle = { ...appliedStyle, lineHeight: props.lineHeight };
  }
  if (props?.textAlign) {
    appliedStyle = { ...appliedStyle, textAlign: props.textAlign };
  }
  if (props?.fontFamily) {
    appliedStyle = { ...appliedStyle, fontFamily: props.fontFamily };
  }
  if (props?.fontSize) {
    appliedStyle = { ...appliedStyle, fontSize: props.fontSize };
  }
  if (props?.fontWeight) {
    appliedStyle = { ...appliedStyle, fontWeight: props.fontWeight };
  }
  if (props?.textTransform) {
    appliedStyle = { ...appliedStyle, textTransform: props.textTransform };
  }
  return fontStyleFunc(appliedStyle);
};
