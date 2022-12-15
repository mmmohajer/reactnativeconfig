import AppTouchable from "BaseComponents/AppTouchable";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Icon from "BaseComponents/Icon";

import { colors } from "Styles/base/vars";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Button = ({
  onPress = null,
  onLongPress = null,
  touchableProps,
  btnType = 1,
  btnWidthInSize = null,
  btnWidthInPer = null,
  btnText,
  iconType = null,
  iconSize = null,
  style,
  ...props
}) => {
  let bgColor = colors.themeTwo;
  let brColor = colors.themeOne;
  let appliedBtnWidthInSize = null;
  let appliedBtnWidthInPer = null;

  if (btnType === 2) {
    bgColor = colors.themeTwo;
    brColor = colors.themeTwo;
  }
  if (btnWidthInSize) {
    appliedBtnWidthInSize = btnWidthInSize;
    appliedBtnWidthInPer = null;
  }
  if (btnWidthInPer) {
    appliedBtnWidthInSize = btnWidthInPer;
    appliedBtnWidthInSize = null;
  }
  if (!btnWidthInSize && !btnWidthInPer) {
    appliedBtnWidthInSize = 200;
  }
  return (
    <>
      <AppTouchable
        type="highlight"
        touchableProps={{ onPress, onLongPress, ...touchableProps }}
        bgColor={bgColor}
        paddingL={4}
        paddingR={4}
        paddingT={1}
        paddingB={1}
        brRad={5}
        brColor={brColor}
        widthInSize={appliedBtnWidthInSize}
        widthInPercentage={appliedBtnWidthInPer}
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        style={{ ...styles.shType1, ...style }}
        {...props}
      >
        <AppView>
          {iconType ? (
            <AppView direction="row" isCentralizedInX2Dir>
              <AppView marginR={1}>
                <Icon name={iconType} size={iconSize || 30} />
              </AppView>
              <AppText
                textProps={{
                  isBold: true,
                  textTransform: "uppercase",
                }}
              >
                {btnText}
              </AppText>
            </AppView>
          ) : (
            <AppText
              textProps={{
                isBold: true,
                textTransform: "uppercase",
              }}
            >
              {btnText}
            </AppText>
          )}
        </AppView>
      </AppTouchable>
    </>
  );
};

export default Button;
