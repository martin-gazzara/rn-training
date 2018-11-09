import React from "react";
import {View, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1        
    },
    image1:{
        position:"absolute",
        top:50,
        left:50,
        width:100,
        height:100
    },
    image2:{
        position:"absolute",
        top:210,
        left:50
    }
})

export default class Exercise extends React.Component{

    

    render(){
        return(
        <View style={styles.container}>
            <Image
                style={styles.image1}
                source={{uri: 'http://moziru.com/images/pixel-clipart-mario-mushroom-5.jpg'}}
            />
            <Image
                style={styles.image2}
                source={require('../images/mario.png')}
            />
        </View>
       )
    }

}


