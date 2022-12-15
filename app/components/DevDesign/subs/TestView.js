import { View, Text } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "../localStyles";

const TestView = () => {
  return (
    <>
      <AppView
        bgColor="yellow"
        widthInSize={200}
        heightInSize={200}
        brRadTL={50}
        brRadTR={20}
        brRadBL={10}
        brRadBr={0}
        brColorT="red"
        brColorR="green"
        brColorB="purple"
        brColorL="silver"
        brThicknessT={2}
        brThicknessB={10}
        brThicknessL={15}
        brThicknessR={5}
        paddingT={2}
        paddingB={2}
        paddingL={2}
        paddingR={2}
        marginT={2}
        marginB={4}
        marginL={5}
        style={{ ...styles.shType1, ...styles.sh50, ...localStyles.test }}
      ></AppView>
    </>
  );
};

export default TestView;
