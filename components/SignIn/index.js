import { View } from 'react-native';
import React from 'react';
import { useAuth } from '../pages/contexts/auth';

const SignIn = () => {

  const { signed, signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View>
      <Button title="Sing In" onPress={handleSignIn} />
    </View>
  )
}

export default SignIn;
