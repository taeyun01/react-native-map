import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthStackNavigator = () => {
  const Stack = createStackNavigator();
  // stack 만들기
  return (
    <Stack.Navigator>
      {/* name은 스크린의 이름, component는 스크린 컴포넌트 */}
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({});

export default AuthStackNavigator;
