import React from "react";
import {View, StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    container:{
        paddingVertical:30,
    },
    box1:{
        width:200,
        height:200,
        backgroundColor:"blue",
        borderRadius:10
    },
    box2:{
        width:200,
        height:200,
        backgroundColor:"red",
        borderRadius:10
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        textAlignVertical:"center"
    },
    textNested:{
        color:"orange"
    }
})

export default class Exercise extends React.Component{

    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}><Text style={styles.text}>I'm the <Text style={styles.textNested}>Box 1</Text></Text></View>
                <View style={styles.box2}><Text style={styles.text}>I'm the <Text style={styles.textNested}>Box 2</Text></Text></View>
            </View>
       )
    }

}


