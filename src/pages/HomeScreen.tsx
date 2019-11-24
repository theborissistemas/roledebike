import React, {memo} from 'react';
import Background from '../componentes/Background';
import Logo from '../componentes/Logo';
import Header from '../componentes/Header';
import Button from '../componentes/Button';
import Paragraph from '../componentes/Paragraph';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Conectar</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginPage')}>
      Entrar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}>
      Cadastrar
    </Button>
  </Background>
);

export default memo(HomeScreen);
