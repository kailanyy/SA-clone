import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../DashBoard/index';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;