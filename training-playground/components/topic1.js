import React from "react";
import {View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    box1:{
        width:50,
        height:50,
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
        width:150,
        height:150,
        backgroundColor:"yellow",
        borderRadius:10
    }
})

export default class Exercise extends React.Component{

    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
            </View>
       )
    }

}


