import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../../contexts/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes = () => {
  const {signed} = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;