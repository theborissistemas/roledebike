import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator} from '../../core/utils';
import Background from '../../componentes/Background';
import BackButton from '../../componentes/BackButton';
import Logo from '../../componentes/Logo';
import Header from '../../componentes/Header';
import TextInput from '../../componentes/TextInput';
import {theme} from '../../core/theme';
import Button from '../../componentes/Button';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginPage');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginPage')} />

      <Logo />

      <Header>Recuperar Senha</Header>

      <TextInput
        label="E-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Reconfigurar a senha
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.label}>← Voltar ao Login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
