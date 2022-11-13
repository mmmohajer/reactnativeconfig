getJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import { View, Text } from \"react-native\";

import AppView from \"BaseComponents/AppView\";
import AppText from \"BaseComponents/AppText\";

import { styles, fontStyleFunc } from \"Styles\";

import { localStyles } from \"./localStyles\";

const $compName = () => {
  return (
    <>
      <AppView>
        <AppText>$compName</AppText>
      </AppView>
    </>
  );
};

export default $compName;
"""
}

getStylesContext() {

    echo """import { StyleSheet } from \"react-native\";

export const localStyles = StyleSheet.create({});
"""
}

getJsPageContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from \"classnames\";
import { Div } from \"basedesign-iswad\";

import PublicRoute from \"@/components/PublicRoute\";
import Seo from \"@/components/Seo\";
import PageContainer from '@/components/PageContainer';

import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div>$compName</Div>
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default $compName;
"""
}

getAppsContext() {
local appName=$1

echo """from django.apps import AppConfig


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = '$appName'
"""
}

getUrlsContext() {
echo """from django.urls import path, include
from rest_framework import routers
"""
}

getTestFileContext() {
  local compName=$1

  echo """import React from \"react\";
import { render as renderRTL, screen, fireEvent } from \"@testing-library/react\";
import $compName from \"../$compName\";
import * as reactRedux from \"react-redux\";
import { BrowserRouter } from \"react-router-dom\";

const render = (component) =>
  renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock(\"react-redux\", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe(\"Test $compName Component\", () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test(\"\", () => {
    render(<$compName />);

    expect(screen.getByText(/$compName/i)).toBeInTheDocument();
  });
});

"""
}
