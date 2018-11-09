import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";

const styles = StyleSheet.create({
    container:{
        paddingVertical:30,
        height:20000
    },
    box1:{
        width:100,
        height:100,
        backgroundColor:"blue",
        borderRadius:10
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:"red",
        borderRadius:10
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:"yellow",
        borderRadius:10
    }
})

export default class Exercise extends React.Component{

    

    render(){
        return(
            <ScrollView horizontal style={styles.container}>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
            </ScrollView>
       )
    }

}


