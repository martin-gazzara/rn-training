import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighLight } from 'react-native';
import Box from "../training-playground/components/topic1"


export default class App extends React.Component {

  render() {
    return (
      <Box style={styles.box}/>        
    );
  }
}

const styles = StyleSheet.create({
  box:{
      width:200,
      height:200,
      position:"absolute",
      left:50,
      top:100,
      borderWidth:3,
      borderColor:"violet",
      borderStyle:"dotted",
      borderRadius:10,
      backgroundColor:"blue"
    }
})

