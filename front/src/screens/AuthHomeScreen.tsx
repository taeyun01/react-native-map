import {Button, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

//* React Native의 모든 화면 컴포넌트는 navigation props를 가지고 있음
const AuthHomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate('Login')} // 이동할 스크린 name을 입력
        />
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default AuthHomeScreen;
