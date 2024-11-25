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
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>텍스트</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //* flex: 1을 요소마다 주었는데, 1:1, 1:2, 2:3 이런식으로 스타일을 지정할 때 유용함
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row', // flexDirection: 'column'이 기본값
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

//* SafeAreaView는 아이폰 노치영역을 침범하지 않고 위치가 지정됨. 대부분 화면에 SafeAreaView를 사용
