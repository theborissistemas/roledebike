import React, {memo} from 'react';
import Background from '../componentes/Background';
import Logo from '../componentes/Logo';
import Header from '../componentes/Header';
import Paragraph from '../componentes/Paragraph';
import Button from '../componentes/Button';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Vamos começar</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Sair
    </Button>
  </Background>
);

export default memo(Dashboard);
