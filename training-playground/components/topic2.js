import React from "react";
import {View} from "react-native";
import styles from "../styles/styleTopic2";

const changeDirection = false;   // If you want to see the boxes in a row, you must to set this in 'true'. If this is false
                                 // the boxes will be in a column

export default class Exercise extends React.Component{

    render(){
        return(
            <View style={[styles.container,change ? styles.row : styles.col]}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
            </View>
        )
    }

}
