import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼" onPress={() => console.log('버튼 클릭')} />
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    // margin: 10,
    marginVertical: 10, // 상하
    marginHorizontal: 20, // 좌우
  },
});

export default App;

//* SafeAreaView는 아이폰 노치영역을 침범하지 않고 위치가 지정됨. 대부분 화면에 SafeAreaView를 사용
