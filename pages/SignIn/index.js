import { View, Button } from 'react-native';
import React, {useContext} from 'react';
import { signIn } from '../services/auth';
import AuthContext from '../contexts/auth';

const SignIn = () => {
  const { signed, signIn, user } = useContext(AuthContext);

  console.log('signed',signed);
  console.log('user',user);

  async function handleSignIn() {
    signIn();
    const response = await signIn();
    console.log(response);
  }

  return (
    <View>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  )
}

export default SignIn;