import { SafeAreaView } from "react-native";

import ScreenContainer from "Components/ScreenContainer";
import DevDesign from "Components/DevDesign";

import { styles } from "Styles";

const App = () => {
  return (
    <>
      <ScreenContainer isScrollable={false}>
        <DevDesign />
      </ScreenContainer>
    </>
  );
};

export default App;
