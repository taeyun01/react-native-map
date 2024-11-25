import {Button, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/AuthStackNavigator';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

//* React Native의 모든 화면 컴포넌트는 navigation props를 가지고 있음
const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)} // 이동할 스크린 name을 입력
        />
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default AuthHomeScreen;
