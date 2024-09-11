import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailTaskScreen from '../screens/DetailTaskScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StackNavigation">
      <Stack.Screen
        key="HomeScreen"
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key="DetailTaskScreen"
        name="DetailTaskScreen"
        component={DetailTaskScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key="TaskScreen"
        name="TaskScreen"
        component={TaskScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default function App(data) {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}
