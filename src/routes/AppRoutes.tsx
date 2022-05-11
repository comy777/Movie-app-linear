import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';
import { DarkThemeApp, DefaultThemeApp } from '../theme/theme';
import { useStyles } from '../hooks/useStyles';
import StackRoutes from './StackRoutes';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  const {darkTheme} = useContext(AppContext)
  const {stylesTheme} = useStyles()
  return (
    <NavigationContainer theme={darkTheme ? DarkThemeApp : DefaultThemeApp} >
      <Tab.Navigator 
        screenOptions={{
          headerShown: false, 
          title: '', 
          tabBarActiveBackgroundColor: stylesTheme.backgroundtab.backgroundColor,
        }}>
        <Tab.Screen
          name="home"
          component={StackRoutes}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color='white' size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
