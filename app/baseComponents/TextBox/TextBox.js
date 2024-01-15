import { View, Text, TextInput } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Icon from "BaseComponents/Icon";

import { getAllTextStyles } from "Utils/getStyles";
import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const TextBox = ({
  placeholder = "",
  placeholderColor = "gray",
  val,
  setVal = null,
  onChange = null,
  showClearButton = "always",
  isSecure = false,
  autoCapitalize = "none",
  autoFocus = false,
  labelText = "",
  iconName = "",
  iconColor = "gray",
  iconSize = 20,
  errorMessage = "",
  setErrorMessage = null,
  isMultiLine = false,
  textProps,
  inputProps,
  ...props
}) => {
  const appliedStyle = getAllTextStyles(textProps);

  return (
    <>
      <AppView marginB={2}>
        {labelText && (
          <AppText marginB={1} marginL={1}>
            {labelText}
          </AppText>
        )}
        <AppView
          bgColor="silver"
          brRad={5}
          brColor="gray"
          brThickness={2}
          paddingL={1}
          direction="row"
          isFullWidth
          {...props}
        >
          {iconName && (
            <Icon
              name={iconName}
              color={iconColor}
              size={iconSize}
              style={{ marginRight: 4 }}
            />
          )}
          <TextInput
            value={val}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              flex: 1,
              ...appliedStyle,
            }}
            onChangeText={(text) => {
              if (setVal) {
                setVal(text);
              }
              if (setErrorMessage) {
                setErrorMessage("");
              }
              if (onChange) {
                onChange();
              }
            }}
            clearButtonMode={showClearButton}
            secureTextEntry={isSecure}
            autoCapitalize={autoCapitalize}
            autoFocus={autoFocus}
            multiline={isMultiLine}
            {...inputProps}
          />
        </AppView>
        {errorMessage && (
          <AppText textProps={{ color: "error" }} marginT={1} marginL={1}>
            {errorMessage}
          </AppText>
        )}
      </AppView>
    </>
  );
};

export default TextBox;
