import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../../componentes/Background';
import Logo from '../../componentes/Logo';
import Header from '../../componentes/Header';
import Button from '../../componentes/Button';
import TextInput from '../../componentes/TextInput';
import BackButton from '../../componentes/BackButton';
import {theme} from '../../core/theme';
import {emailValidator, passwordValidator} from '../../core/utils';
import {Navigation} from '../../types';
import firebase from 'react-native-firebase';

type Props = {
  navigation: Navigation;
};

const LoginPage = ({navigation}: Props) => {
  const [email, setEmail] = useState<any>({value: '', error: ''});
  const [password, setPassword] = useState<any>({value: '', error: ''});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          navigation.navigate('Dashboard');
        })
        .catch(error => {
          setErrorMessage(
            'Login e/ou senha incorretos. Verifique os dados e tente novamente.',
          );

          return;
        });
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomePage')} />

      <Logo />

      <Header>Seja Bem Vindo</Header>

      {errorMessage.length > 0 && (
        <Text style={{color: 'red'}}>{errorMessage}</Text>
      )}

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecuperarSenhaPage')}>
          <Text style={styles.label}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Não possui conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('NovaContaPage')}>
          <Text style={styles.link}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginPage);
