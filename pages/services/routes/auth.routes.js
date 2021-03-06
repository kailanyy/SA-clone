import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../SignIn/index';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;