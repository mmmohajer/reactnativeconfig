import { View, Text, ScrollView } from "react-native";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";

import { styles, fontStyleFunc } from "Styles";

import TestList from "./subs/TestList";
import TestAnimatedView from "./subs/TestAnimatedView";
import TestButton from "./subs/TestButton";
import TestIcon from "./subs/TestIcon";
import TestImage from "./subs/TestImage";
import TestSwipeable from "./subs/TestSwipeable";
import TestSwitch from "./subs/TestSwitch";
import TestText from "./subs/TestText";
import TestTextBox from "./subs/TestTextBox";
import TestToggler from "./subs/TestToggler";
import TestView from "./subs/TestView";
import TestModal from "./subs/TestModal";
import TestImagePicker from "./subs/TestImagePicker";

import TitleSeparator from "./subs/TitleSeparator";
import { localStyles } from "./localStyles";

const DevDesign = () => {
  return (
    <>
      <ScrollView>
        <AppView>
          <TitleSeparator title="View" />
          <TestView />
          <TitleSeparator title="Text" />
          <TestText />
          <TitleSeparator title="Icon" />
          <TestIcon />
          <TitleSeparator title="Button" />
          <TestButton />
          <TitleSeparator title="Animated View" />
          <TestAnimatedView />
          <TitleSeparator title="Image" />
          <TestImage />
          <TitleSeparator title="Swipeable" />
          <TestSwipeable />
          <TitleSeparator title="Switch" />
          <TestSwitch />
          <TitleSeparator title="Toggler" />
          <TestToggler />
          <TitleSeparator title="Text Box" />
          <TestTextBox />
          <TitleSeparator title="Modal" />
          <TestModal />
          <TitleSeparator title="Image Picker" />
          <TestImagePicker />

          {/* <TitleSeparator title="List" />
          <TestList /> */}
        </AppView>
      </ScrollView>
    </>
  );
};

export default DevDesign;
