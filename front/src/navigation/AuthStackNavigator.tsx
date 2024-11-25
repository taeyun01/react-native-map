import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';
import {authNavigations} from '../constants';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const AuthStackNavigator = () => {
  const Stack = createStackNavigator<AuthStackParamList>();
  // stack 만들기
  return (
    <Stack.Navigator>
      {/* name은 스크린의 이름, component는 스크린 컴포넌트 */}
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({});

export default AuthStackNavigator;
