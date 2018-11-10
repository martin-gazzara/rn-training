import React from "react";
import {View} from "react-native";
import styles from "../styles/styleTopic2";

export default class Exercise extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.box1,styles.bord]}></View>
                <View style={[styles.box2,styles.bord]}></View>
                <View style={[styles.box3,styles.bord]}></View>
            </View>
        )
    }

}
