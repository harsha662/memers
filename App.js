import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Educational from './screen/educational'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import LoginScreen from './screen/LoginScreen'
import educational from './screen/educational';
import homescreen from './screen/homescreen';
import facts from './screen/facts'
import news from './screen/news'
import jokesScreen from './screen/jokes'
export default class App extends React.Component {

  
  render() {


    return (
      <View>
      
    

 <AppContainer/>

            </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
//WelcomeScreen:{screen: LoginScreen},
  homescreen1: homescreen,
 // educational2: educational,
  facts2:facts,
  news1:news,
 JokesScreen1:jokesScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  displayText: { fontSize: 15, textDecorationLine: 'underline' },
  scanButton: { backgroundColor: '#2196F3', padding: 10, margin: 10 },
  buttonText: { fontSize: 15, textAlign: 'center', marginTop: 10 },
  inputView: { flexDirection: 'row', margin: 20 },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  scanButton: {
    backgroundColor: '#66BB6A',
    width: 200,
    borderWidth: 2,
    borderLeftWidth: 2,
     padding: 10,
     alignSelf:"left",
       margin:10

  },
  submitButton: { backgroundColor: '#FBC02D', width: 100, height: 50 },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})