import { View, Button } from 'react-native';
import React from 'react';
import { useAuth } from '../contexts/auth';

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