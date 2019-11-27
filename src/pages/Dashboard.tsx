import React, {memo} from 'react';
import Background from '../componentes/Background';
import Logo from '../componentes/Logo';
import Header from '../componentes/Header';
import Paragraph from '../componentes/Paragraph';
import Button from '../componentes/Button';
import {Navigation} from '../types';
import firebase from 'react-native-firebase';
import {Text} from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import {TextInput} from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Dashboard: React.FC<Props> = ({navigation}: Props) => {
  // const {currentUser} = firebase.auth();

  return (
    <Background>
      <Logo />
      <Header>Vamos começar</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      {/* <TextInput>`${currentUser}`</TextInput> */}
      <Button mode="outlined" onPress={() => navigation.navigate('HomePage')}>
        Sair
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
