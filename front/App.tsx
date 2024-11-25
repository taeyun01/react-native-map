import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [name, setName] = useState('');

  //* event.targe을 사용할 필요없음. props에 바로 텍스트가 담김
  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleChangeInput}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //* flex: 1을 요소마다 주었는데, 1:1, 1:2, 2:3 이런식으로 스타일을 지정할 때 유용함
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    height: 50,
    width: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', // flexDirection: 'column'이 기본값
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

//* SafeAreaView는 아이폰 노치영역을 침범하지 않고 위치가 지정됨. 대부분 화면에 SafeAreaView를 사용
