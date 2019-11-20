import React, {useState} from 'react';
import {Text} from 'react-native';
import {TextInput} from 'react-native-paper';

type Props = {};

const LoginPage: React.FC<Props> = () => {
  const [value, onChangeInput] = useState('');
  return (
    <>
      <Text>Teste do Login</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeInput(text)}
        value={value}
      />
    </>
  );
};

export default LoginPage;
