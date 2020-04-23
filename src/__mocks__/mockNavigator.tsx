import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MockedNavigator = ({ component, params = {} }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MockedScreen"
        component={component}
        initialParams={params}
      />
    </Stack.Navigator>
  );
};

export default MockedNavigator;
