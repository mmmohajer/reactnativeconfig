import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import BaseTemplate from "BaseComponents/BaseTemplate";
import Alert from "BaseComponents/Alert";
import Loading from "BaseComponents/Loading";
import Popup from "BaseComponents/Popup/Popup";
import OfflineNotice from "BaseComponents/OfflineNotice";

import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const ScreenContainer = ({ isScrollable = false, children }) => {
  const loading = useSelector((state) => state.loading);
  const notifications = useSelector((state) => state.notifications);
  const modalType = useSelector((state) => state.modalType);

  return (
    <>
      <BaseTemplate>
        {notifications.length > 0 ? (
          <AppView zIndex={3}>
            <Alert />
          </AppView>
        ) : (
          ""
        )}
        {loading && <Loading />}
        {modalType && <Popup />}
        <AppView heightInPercentage={100}>
          {isScrollable ? <ScrollView>{children}</ScrollView> : children}
        </AppView>
        <AppView zIndex={3}>
          <OfflineNotice />
        </AppView>
      </BaseTemplate>
    </>
  );
};

export default ScreenContainer;
