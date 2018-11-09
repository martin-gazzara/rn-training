import React from "react";
import {View, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
    container:{
        width:250,
        height:250,
        position:"absolute",
        top:100,
        left:50,
        borderWidth:2,
        borderColor:"black"
    },
    img:{
        flex:1,
        resizeMode:"contain"
    }
})

export default class Exercise extends React.Component{

    

    render(){
        return(
        <View style={styles.container}>
            <Image style={styles.img} source={require("../images/mario.png")}/>
        </View>
       )
    }

}


