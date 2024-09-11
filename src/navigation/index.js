import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import {store} from '../../src/redux/store';
import MainNavigator from './MainNavigator';

function Main() {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <MainNavigator />
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default Main;
