import React from 'react'
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack'
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export type RootProps = {
  'home stack': undefined,
  'details stack': {id: string}
}

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name='home stack'
        component={Home}
      />
      <Stack.Screen 
        name='details stack'
        component={Details}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes