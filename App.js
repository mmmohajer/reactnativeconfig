import { SafeAreaView } from "react-native";

import ScreenContainer from "Components/ScreenContainer";
import Test from "Components/Test";

import { styles } from "Styles";

const App = () => {
  return (
    <>
      <ScreenContainer>
        <Test />
      </ScreenContainer>
    </>
  );
};

export default App;
