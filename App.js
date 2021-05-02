import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screeens/Login';
import Home from './screeens/Home';
// color #131C21 #2A2F32  warna Font=>  #DFE0E1
const App = () => {
  const Stack = createStackNavigator();
  const globalOption = {
    headerStyle: {backgroundColor: '#131C21'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
  };
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131C21" />
      <Stack.Navigator screenOptions={globalOption}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DeyChat" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  colorText: {color: 'red'},
});
