// App.js or your main entry file

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './Screen/HomeScreen'; // assuming HomeScreen is in the 'Screen' folder
import DetailScreen from './Screen/DetailScreen'; // assuming DetailScreen is in the 'Screen' folder

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
