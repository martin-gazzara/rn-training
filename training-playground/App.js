import React from 'react';
import {View,Text} from "react-native";
import AppTextInput from "../training-playground/components/topic3";

export default class App extends React.Component {

  render() {
    return (
      <View style={{marginTop:40}}>
        <Text>Username:</Text>
        <AppTextInput type="text"/>
        <Text>Password:</Text>
        <AppTextInput type="password"/>
      </View>
 
    );
  }
}
