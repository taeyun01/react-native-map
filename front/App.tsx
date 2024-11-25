import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;

//* SafeAreaView는 아이폰 노치영역을 침범하지 않고 위치가 지정됨. 대부분 화면에 SafeAreaView를 사용
