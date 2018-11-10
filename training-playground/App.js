import React from 'react';
import {View,Text} from "react-native";
import Button from "../training-playground/components/topic3";

export default class App extends React.Component {

  render() {
    return (
      <View style={{marginTop:40,alignItems:"center"}}>
        <Button type="primary" value="CONTINUE" disable={false}/>
        <Button type="secondary" value="SIGN IN" disable={false}/>
        <Button type="primary" value="DISABLED" disable={true}/>
      </View>
 
    );
  }
}
