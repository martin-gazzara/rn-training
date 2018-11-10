import React from "react";
import {View} from "react-native";
import styles from "../styles/styleTopic2";

export default class Exercise extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                  <View style={styles.first}></View>
                  <View style={styles.second}></View>
                  <View style={styles.third}></View>
            </View>
        )
    }

}
