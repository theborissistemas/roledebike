import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../../componentes/Background';
import Logo from '../../componentes/Logo';
import Header from '../../componentes/Header';
import Button from '../../componentes/Button';
import TextInput from '../../componentes/TextInput';
import BackButton from '../../componentes/BackButton';
import {theme} from '../../core/theme';
import {Navigation} from '../../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/utils';
import firebase from 'react-native-firebase';

type Props = {
  navigation: Navigation;
};

const NovaContaPage = ({navigation}: Props) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => navigation.navigate('Dashboard'))
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setEmail({...email, error: 'E-mail já está sendo utilizado.'});
          } else if (error.code === 'auth/weak-password') {
            setPassword({
              ...password,
              error: 'Senha deve ter no mínimo 6 caracteres.',
            });
          }
          return;
        });
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomePage')} />

      <Logo />

      <Header>Criar Nova Conta</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />

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
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
        Criar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Já possui uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(NovaContaPage);
