import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312E38" />

      <AppProvider>
        <View>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

const View = styled.SafeAreaView`
  flex: 1;
  background-color: #312e38;
`;

const StatusBar = styled.StatusBar``;

export default App;
