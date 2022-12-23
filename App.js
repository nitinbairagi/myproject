import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Register from './screens/Signup';
import {Provider, useSelector} from 'react-redux';
import {Text, Button, View, ActivityIndicator} from 'react-native';
import Store from './Redux/Redux';
import Home from './screens/Home';
import Setting from './screens/Setting';
import List from './screens/List';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const BottomTab = () => {
  return (
    <bottomTab.Navigator screenOptions={{headerShown: false}}>
      <bottomTab.Screen name="Home" component={Home} />
    </bottomTab.Navigator>
  );
};

export default App;
