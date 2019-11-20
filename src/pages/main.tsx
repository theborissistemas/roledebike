import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import LoginPage from './login/LoginPage';
import {Provider as PaperProvider} from 'react-native-paper';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Rolê de Bike',
  };

  render() {
    return (
      <PaperProvider>
        <View>
          <Text>Página Main</Text>
          <LoginPage />
        </View>
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent('main', () => Main);
